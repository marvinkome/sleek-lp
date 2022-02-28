// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";

let client = new Redis(process.env.REDIS_URL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  try {
    switch (method) {
      case "POST": {
        console.log("Demo request", body);

        // we basically have to redirect the request to sleek api
        // send withdraw request to the api
        const resp = await fetch("https://api.sleekpay.app/withdraw-funds", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!resp.ok) {
          const errorPayload = await resp.json();
          return res.status(resp.status).send(errorPayload || "Unexpected Error");
        }

        const payload = await resp.json();
        return res.status(200).send(payload);
      }
      default:
        console.warn("method not error");
        res.status(405).send({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error("general error", err);
    res.status(500).send({ error: "general error" });
  }
}

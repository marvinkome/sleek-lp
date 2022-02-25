// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";

let client = new Redis(process.env.REDIS_URL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  try {
    switch (method) {
      case "POST": {
        console.log("Signup request", body);

        const { email, name, organization } = JSON.parse(body || "{}");
        const key = `signup:${email}`;

        const user = await client.get(key);
        if (!!user) {
          console.warn("User already signed up", user, body);
          return res.status(200).send({ message: "Already signed up" });
        }

        const data = JSON.stringify({
          email,
          name,
          organization,
        });
        const resp = await client.set(key, data);

        console.log("Stored data", data, { resp });
        return res.status(200).send({ message: "Signup successful" });
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

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";

let client = new Redis(process.env.REDIS_URL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  try {
    switch (method) {
      case "POST": {
        const { email, name, organization } = body;
        const key = `signup:${email}`;

        if (await client.get(key)) {
          console.warn("User already signed up", body);
          return res.status(200).send({ message: "Already signed up" });
        }

        const data = JSON.stringify({
          email,
          name,
          organization,
        });
        await client.set(key, data);

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

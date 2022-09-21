// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // http://localhost:3000/api/colors
  if (req.method === "GET") {
    const colors = await prisma.color.findMany();
    res.json(colors);
  }
}

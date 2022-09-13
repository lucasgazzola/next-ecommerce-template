// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const product = await prisma.product.findMany();
    res.json(product);
  }

  if (req.method === "POST") {
    // TODO! ALL WORKING REFACTOR AND FINISH THE CRUD
    console.log("here");
    console.log(req.body);
    try {
      const product = req.body;
      /* 
      TODO? JOIN THE QUERY

      SELECT
      "Product".description, "Category".description AS "Category"

      from public."Product"
      join public."Category" 
      ON "Category".id = "Product"."categoryId";

      */
      const newProduct = await prisma.product.create({
        data: {
          ...product,
          color: {
            connect: {
              id: 1
            }
          },
          category: {
            connect: {
              id: 1
            }
          }
        }
      });
      res.status(201).json({ status: "OK", product: newProduct });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({ status: "ERROR", error: error?.message });
      }
      res.status(409).json({ status: "ERROR", error: error });
    }
  }
}

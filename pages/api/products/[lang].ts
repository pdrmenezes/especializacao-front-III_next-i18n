import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsAPIResponse } from "../../../types";
import { products } from "../db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ProductsAPIResponse>) {
  const { lang } = req.query;

  res.status(200).json(products[`${lang}`]);
}

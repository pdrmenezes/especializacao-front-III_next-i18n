import type { NextApiRequest, NextApiResponse } from "next";
import { TyCsAPIResponse } from "../../../types";
import { tycs } from "../db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<TyCsAPIResponse>) {
  const { lang } = req.query;

  res.status(200).json(tycs[`${lang}`]);
}

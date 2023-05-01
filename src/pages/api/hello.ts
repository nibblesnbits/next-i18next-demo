// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { i18n } from "next-i18next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const t = i18n?.isInitialized ? i18n.t : await i18n!.init();
  res.status(200).json({ message: t("api.message") as string });
}

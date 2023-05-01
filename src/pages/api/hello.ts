// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { i18n } from "next-i18next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const t = i18n?.isInitialized ? i18n.t : await i18n!.init();
  res.status(200).json({ message: t("api") as string });
}

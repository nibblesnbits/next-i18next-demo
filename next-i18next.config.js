module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US"],
  },
  // This fixes the issue with the locale not being detected in Vercel
  // see https://github.com/i18next/next-i18next/issues/462#issuecomment-832793454
  // ...(typeof window === undefined
  //   ? { localePath: path.resolve("./public/locales") }
  //   : {}),
};

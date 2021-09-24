module.exports = {
  basePath: "/helseatlas",
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["no", "en"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "no",
    localeDetection: false,
  },
};

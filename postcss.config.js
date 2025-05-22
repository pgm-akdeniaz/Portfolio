module.exports = {
  plugins: {
    "postcss-nesting": {},
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === "production" ? {} : false,
  },
};

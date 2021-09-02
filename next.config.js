// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sfoht.mongodb.net/${process.env.DB_HOST}?retryWrites=true&w=majority`,
    JWT_SECRET: process.env.JWT_SECRET,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
};

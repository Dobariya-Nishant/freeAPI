import "dotenv/config";

export const env = {
  PORT: process.env.PORT || 7000,
  MONGO_DB_URL: process.env.MONGO_DB_URL || "mongodb://localhost:27017/test",
};

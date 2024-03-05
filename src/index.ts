import { httpServer } from "./app";
import { env } from "./config/env";
import { connectDB } from "./db/connectDB";

const db = connectDB();

db.then(() => {
  httpServer.listen(env.PORT, () => {
    console.log("Server is started at port", env.PORT);
  });
});

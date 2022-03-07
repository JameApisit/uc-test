import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import boots from "./boots";
import { sequelize } from "./config/database";
import { error } from "./middleware";

const app = express();
app.use(cors());

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

app.use(express.json({ limit: "50mb" }));

try {
  sequelize.authenticate();
  boots(app, sequelize);
  console.log("Connection has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database:", err);
}

app.use(error);

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
  console.log(
    `index -> host : ${process.env.DB_HOST} , dbName : ${process.env.DB_NAME}, dbUserName : ${process.env.DB_USERNAME} , dbPassword : ${process.env.DB_PASSWORD}`
  );
});

import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

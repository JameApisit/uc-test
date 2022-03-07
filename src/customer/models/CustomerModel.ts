import { DataTypes, Model } from "sequelize";

import { sequelize } from "../../config/database";
import { CustomerCreateEntity, CustomerEntity } from "../types";

export default class CustomerModel
  extends Model<CustomerEntity, CustomerCreateEntity>
  implements CustomerEntity
{
  declare id: number;
  declare code: string;
  declare name: string;
  declare phoneNumber: string;
  declare email: string;
  declare creditPeriodDay: number;
  declare websiteUrl: string;
  declare readonly createdAt: Date;
  declare readonly modifiedAt: Date;
}

CustomerModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: DataTypes.TEXT,
    name: DataTypes.TEXT,
    phoneNumber: {
      type: DataTypes.TEXT,
      field: "phone_number",
    },
    email: {
      type: DataTypes.TEXT,
      field: "email",
    },
    websiteUrl: {
      type: DataTypes.TEXT,
      field: "website_url",
    },
    creditPeriodDay: {
      type: DataTypes.INTEGER,
      field: "credit_period_day",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    modifiedAt: {
      type: DataTypes.DATE,
      field: "modified_at",
      allowNull: true,
    },
  },
  { sequelize, timestamps: false, tableName: "customer" }
);

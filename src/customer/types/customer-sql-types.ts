import { Optional } from "sequelize/dist";

export interface CustomerEntity {
  id: number;
  code: string;
  name: string;
  phoneNumber: string;
  email?: string;
  creditPeriodDay?: number;
  websiteUrl?: string;
  createdAt: Date;
  modifiedAt?: Date;
}

export interface CustomerCreateEntity
  extends Optional<CustomerEntity, "id" | "createdAt"> {}

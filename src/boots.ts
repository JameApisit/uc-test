import express, { Express } from "express";
import { Sequelize } from "sequelize";
import {
  CustomerController,
  CustomerRepository,
  CustomerService,
} from "./customer";
import { customerRouter } from "./customer/router";

const boots = (app: Express, connection: Sequelize) => {
  const customerRepository = new CustomerRepository();
  const customerService = new CustomerService(connection, customerRepository);
  const customerController = new CustomerController(customerService);
  app.use("/customer", customerRouter(customerController));
};

export default boots;

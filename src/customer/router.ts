import express from "express";
import { CustomerController } from ".";

export const customerRouter = (controller: CustomerController) => {
  const router = express.Router();
  router.post("/create", controller.createCustomer);
  return router;
};

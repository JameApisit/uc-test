import { CustomerModel } from "../models";
import { CustomerCreate } from "../types";

export const mapCustomerModelToCustomerCreate = (
  model: CustomerModel
): CustomerCreate => {
  return {
    id: model.id,
    code: model.code,
    name: model.name,
    phoneNumber: model.phoneNumber,
    email: model.email,
    creditPeriodDay: model.creditPeriodDay,
    websiteUrl: model.websiteUrl,
  };
};

import { Transaction } from "sequelize";
import { ErrorCode, SystemError } from "../../common";
import { CustomerModel } from "../models";
import { CustomerCreate, CustomerCreateRequestBody } from "../types";
import { mapCustomerModelToCustomerCreate } from "./sql-mapper";

class CustomerRepository {
  createCustomer = async (
    params: CustomerCreateRequestBody,
    transaction: Transaction
  ): Promise<CustomerCreate> => {
    try {
      const customer = await CustomerModel.create(
        {
          code: params.code,
          name: params.name,
          phoneNumber: params.phoneNumber,
          email: params.email,
          websiteUrl: params.websiteUrl,
          creditPeriodDay: params.creditPeriodDay,
        },
        { transaction }
      );
      return mapCustomerModelToCustomerCreate(customer);
    } catch (error) {
      throw new SystemError(
        "QuotationRepository",
        `Failed to create quotation ${error.original.sqlMessage}`,
        ErrorCode.InternalError
      );
    }
  };
}

export default CustomerRepository;

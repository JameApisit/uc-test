import { Sequelize } from "sequelize/dist";
import { CustomerRepository } from "../repositories";
import { CustomerCreate, CustomerCreateRequestBody } from "../types";

class CustomerService {
  private connection: Sequelize;
  private repository: CustomerRepository;
  constructor(_connection: Sequelize, _repository: CustomerRepository) {
    this.connection = _connection;
    this.repository = _repository;
  }

  createCustomer = async (
    req: CustomerCreateRequestBody
  ): Promise<CustomerCreate> => {
    const transaction = await this.connection.transaction();
    try {
      const created = await this.repository.createCustomer(req, transaction);

      await transaction.commit();

      return created;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
}

export default CustomerService;

import { asyncMiddleware } from "../../middleware";
import { CustomerService } from "../services";
import { CustomerCreateRequest, CustomerCreateResponse } from "../types";

class CustomerController {
  private service: CustomerService;
  constructor(_service: CustomerService) {
    this.service = _service;
  }

  createCustomer = asyncMiddleware(
    async (req: CustomerCreateRequest, res: CustomerCreateResponse) => {
      const created = await this.service.createCustomer(req.body);
      res.status(201).json(created);
    }
  );
}

export default CustomerController;

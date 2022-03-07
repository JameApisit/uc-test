import { Request, Response } from "../../common";
import { CustomerCreate } from "./customer-types";

export type CustomerCreateRequest = Request<{}, CustomerCreateRequestBody, {}>;

export interface CustomerCreateRequestBody {
  code: string;
  name: string;
  phoneNumber: string;
  email?: string;
  websiteUrl?: string;
  creditPeriodDay: number;
}

export type CustomerCreateResponse = Response<CustomerCreate>;

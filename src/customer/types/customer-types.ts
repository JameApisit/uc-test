export interface CustomerCreate {
  id: number;
  code: string;
  name: string;
  phoneNumber: string;
  email?: string;
  websiteUrl?: string;
  creditPeriodDay?: number;
}

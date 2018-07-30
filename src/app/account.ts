import { BankAccount } from './bank-account';

export interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
  status: string;
  identifiers: BankAccount[];
  customerId: string;
  externalReference: string;
}

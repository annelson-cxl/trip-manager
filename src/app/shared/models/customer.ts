import { Address } from './address';
import { Trip } from './trip';

export class Customer {

  constructor() {}

  firstName: string;
  middleName: string;
  lastName: string;

  address: Address;
  trips: Array<Trip>;
}

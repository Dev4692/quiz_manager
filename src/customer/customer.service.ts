import { BadRequestException, Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerDto } from './customer.dto';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(Customer)
        private customerModel: typeof Customer,
    ) { }

    async createCustomer(customerDto: CustomerDto): Promise<Customer> {
        try {
            let customer = new Customer(customerDto);
            await customer.save();
            return customer;
        } catch (error) {
            throw new NotAcceptableException(error.errors[0].message);
        }
    }
}

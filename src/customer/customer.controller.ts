import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerDto } from './customer.dto';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async createCustomer(@Body() customerDto: CustomerDto): Promise<Customer> {
        return await this.customerService.createCustomer(customerDto);
    }

    @Get('id')
    async getCustomer(@Query('id') id: string) {
        return await this.customerService.getCustomer(id);
    }
}

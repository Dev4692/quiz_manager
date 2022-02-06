import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Module({
    imports: [SequelizeModule.forFeature([Customer])],
    exports: [SequelizeModule],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class CustomerModule { }

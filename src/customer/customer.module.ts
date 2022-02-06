import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';
import { PostController } from './post/post.controller';
import { Post } from './post/post.model';
import { PostService } from './post/post.service';

@Module({
    imports: [SequelizeModule.forFeature([Customer, Post])],
    exports: [SequelizeModule],
    controllers: [CustomerController, PostController],
    providers: [CustomerService, PostService]
})
export class CustomerModule { }

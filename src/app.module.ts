import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { sequelizeConfig } from './common/database/sequelize.config';
import { QuizModule } from './quiz/quiz/quiz.module';
import { UserModule } from './user/user.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig), QuizModule, UserModule, CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

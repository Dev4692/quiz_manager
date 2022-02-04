import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { sequelizeConfig } from './common/database/sequelize.config';
import { Quiz } from './quiz/quiz/quiz.model';
import { QuizModule } from './quiz/quiz/quiz.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig), QuizModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

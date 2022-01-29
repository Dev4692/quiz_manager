import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.model';
import { QuizService } from './quiz.service';

@Module({
  imports: [SequelizeModule.forFeature([Quiz])],
  exports: [SequelizeModule],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {


}

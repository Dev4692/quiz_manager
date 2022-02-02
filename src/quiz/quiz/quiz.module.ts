import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { QuestionController } from '../questions/question.controller';
import { Question } from '../questions/question.model';
import { QuestionService } from '../questions/question.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.model';
import { QuizService } from './quiz.service';

@Module({
  imports: [SequelizeModule.forFeature([Quiz, Question])],
  exports: [SequelizeModule],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService]
})
export class QuizModule {


}

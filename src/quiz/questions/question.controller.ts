import { Body, Controller, Get, HttpCode, Post, Put, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdatedAt } from 'sequelize-typescript';
import { QuestionDto } from './question.dto';
import { Question } from './question.model';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {

    constructor(private questionService: QuestionService) { }

    @Get()
    getAllQuiz() {

    }

    @Post()
    @UsePipes(ValidationPipe)
    async updateQuiz(@Body() question: QuestionDto): Promise<Question> {

        return await this.questionService.creatQuestion(question);
    }

    // @Post()
    // @HttpCode(200)
    // @UsePipes(ValidationPipe)   // validation message is in DTO file
    // async creatQuiz(@Body() quizData: QuizDto, @Request() req) {
    //     return await this.quizService.creatQuiz(quizData);
    // }

}

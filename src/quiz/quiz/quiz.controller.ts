import { Body, Controller, Get, HttpCode, Post, Put, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdatedAt } from 'sequelize-typescript';
import { QuizDto } from './quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService) { }

    @Get()
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Put()
    async updateQuiz(@Body() body) {
        await this.quizService.updateQuiz(body);
        return {
            msg: 'Updated Successfully!'
        }
    }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)   // validation message is in DTO file
    async creatQuiz(@Body() quizData: QuizDto, @Request() req) {
        return await this.quizService.creatQuiz(quizData);
    }






}

import { Body, Controller, Get, HttpCode, Post, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizDto } from './quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService) { }

    @Get()
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)   // validation message is in DTO file
    creatQuiz(@Body() quizData: QuizDto, @Request() req) {
        return {
            data: quizData
        };
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { to } from 'await-to-js';
import { QuestionDto } from './question.dto';
import { Question } from './question.model';


@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question)
        private questionModel: typeof Question,
    ) { }

    getAllQuiz() {
        return [1, 2, 3]
    }
    async creatQuestion(questionDto: QuestionDto): Promise<Question> {
        const quiz = new Question(questionDto);
        await quiz.save();
        return quiz.reload()
    }
}

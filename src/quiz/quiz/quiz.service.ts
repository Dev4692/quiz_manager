import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from './quiz.model';
import { to } from 'await-to-js';
import { QuizDto } from './quiz.dto';

@Injectable()
export class QuizService {
    constructor(
        @InjectModel(Quiz)
        private quizModel: typeof Quiz,
    ) { }

    getAllQuiz() {
        return [1, 2, 3]
    }
    async creatQuiz(quizDto: QuizDto): Promise<Quiz> {
        const quiz = new Quiz(quizDto);
        await quiz.save();
        return quiz.reload()
    }

    async updateQuiz(body) {

        let id = body.id;
        var updateObj = {};
        if (body.title) {
            updateObj['title'] = body.title;
        }

        const updatedQuiz = await this.quizModel.findOne({
            where: {
                id: id
            }
        })
        await updatedQuiz.update(updateObj);
        return updatedQuiz;

    }
}

import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Quiz } from '../quiz/quiz.model';

@Table
export class Question extends Model {

    @Column
    question: string;

    @Column
    quizid: number;

    @BelongsTo(() => Quiz, 'quizid')
    hostObject: Quiz;

}
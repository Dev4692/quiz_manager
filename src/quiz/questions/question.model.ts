import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { Quiz } from '../quiz/quiz.model';

@Table
export class Question extends Model {

    @Column
    question: string;

    @Column
    quizid: number;

}
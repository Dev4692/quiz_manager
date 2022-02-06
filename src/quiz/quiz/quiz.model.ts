import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Question } from '../questions/question.model';

@Table
export class Quiz extends Model {
    @Column
    title: string;

    @Column
    discription: string;

    @Column({ defaultValue: true })
    isActive: boolean;



    @HasMany(() => Question, { as: 'questions', foreignKey: 'quizid' })
    question: Question[];
}
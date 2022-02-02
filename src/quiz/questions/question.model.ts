import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Question extends Model {

    @Column
    question: string;
}
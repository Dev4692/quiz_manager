import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Quiz extends Model {
    @Column
    title: string;

    @Column
    discription: string;

    @Column({ defaultValue: true })
    isActive: boolean;
}
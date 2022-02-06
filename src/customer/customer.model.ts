import { Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class Customer extends Model {

    @Column(DataType.STRING(200))
    name: string;

    @Unique
    @Column(DataType.STRING(200))
    email: string;

    @Column(DataType.STRING(200))
    gender: string;
}
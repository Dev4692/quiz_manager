import { BelongsTo, Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Customer } from '../customer.model';

@Table
export class Post extends Model {

    @Column(DataType.STRING(200))
    name: string;

    @Unique
    @Column(DataType.STRING(200))
    title: string;

    @Column(DataType.STRING(200))
    content: string;

    @Column(DataType.INTEGER)
    user_id: number;

    @BelongsTo(() => Customer, 'user_id')
    hostObject: Customer;   // it means that 'user_id' column value is related to Customer
}
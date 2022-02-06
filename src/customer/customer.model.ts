import { Column, DataType, HasOne, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Post } from './post/post.model';

@Table
export class Customer extends Model {

    @Column(DataType.STRING(200))
    name: string;

    @Unique
    @Column(DataType.STRING(200))
    email: string;

    @Column(DataType.STRING(200))
    gender: string;


    // @HasOne(() => model_name, { as: 'name_of_model_in_db', foreignKey: 'column_in_model_table' })
    @HasOne(() => Post, { as: 'posts', foreignKey: 'user_id' })
    question: Post;
    // Customer is connected to Post with key 'user_id'.
}
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    firstname: string;

    @Column
    lastname: string;

    @PrimaryKey
    @Column
    email: string;

    @Column
    contact: string;

    @Column
    address: string;

    @Column({ defaultValue: true })
    isActive: boolean;
}
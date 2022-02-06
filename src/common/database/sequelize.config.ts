import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Customer } from "src/customer/customer.model";
import { Question } from "src/quiz/questions/question.model";
import { Quiz } from "src/quiz/quiz/quiz.model";
import { User } from "src/user/user.model";

export const sequelizeConfig: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Momdad26@home',
    database: 'nest',
    models: [Quiz, Question, User, Customer],
    autoLoadModels: true,
    synchronize: true,
}
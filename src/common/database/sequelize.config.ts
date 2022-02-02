import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Quiz } from "src/quiz/quiz/quiz.model";

export const sequelizeConfig: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Momdad26@home',
    database: 'nest',
    models: [Quiz],
    autoLoadModels: true,
    synchronize: true,
}
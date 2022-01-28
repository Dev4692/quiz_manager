import { IsNotEmpty } from "class-validator";


export class QuizDto {
    @IsNotEmpty({ message: 'Title is mandatory' })
    title: string;

    @IsNotEmpty({ message: 'Description is mandatory' })
    discription: string
}
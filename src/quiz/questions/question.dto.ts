import { IsNotEmpty } from "class-validator";


export class QuestionDto {

    @IsNotEmpty({ message: 'Question is mandatory' })
    question: string
}
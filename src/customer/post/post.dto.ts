import { IsNotEmpty, IsString } from "class-validator";


export class PostDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is mandatory' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Email is mandatory' })
    title: string;

    @IsString()
    @IsNotEmpty({ message: 'address is mandatory' })
    content: string;

    @IsString()
    @IsNotEmpty({ message: 'address is mandatory' })
    user_id: number;

}
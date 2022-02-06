import { IsNotEmpty, IsString } from "class-validator";


export class CustomerDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is mandatory' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Email is mandatory' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'address is mandatory' })
    gender: string;

}
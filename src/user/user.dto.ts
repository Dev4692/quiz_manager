import { IsNotEmpty } from "class-validator";


export class UserDto {
    @IsNotEmpty({ message: 'firstname is mandatory' })
    firstname: string;

    @IsNotEmpty({ message: 'lastname is mandatory' })
    lastname: string;

    @IsNotEmpty({ message: 'email is mandatory' })
    email: string;

    @IsNotEmpty({ message: 'address is mandatory' })
    address: string;

    @IsNotEmpty({ message: 'contact no is mandatory' })
    contact: string
}
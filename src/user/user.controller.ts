import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Get()
    async getAllUser() {
        return await this.userService.getAllUser()
    }

    @Get('user-details')
    async getUserDetails(@Query('email') email) {
        return await this.userService.getUserByPk(email);
    }

    @Post()
    async creatQuiz(@Body() userdata: UserDto): Promise<User> {
        return await this.userService.creatUser(userdata);

    }
}

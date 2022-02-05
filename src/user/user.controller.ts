import { Body, Controller, Get, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }


    // get all users
    @Get()
    async getAllUser() {
        return await this.userService.getAllUser()
    }


    // get all users
    @Get('active')  // send 1 (for active) in query
    async getActiveUsers(@Query('isActive') isActive) {
        return await this.userService.getActiveUsers(isActive)
    }

    // get user detail by email id
    @Get('user-details')
    async getUserDetails(@Query('email') email) {
        return await this.userService.getUserByPk(email);
    }

    // get all users pegination
    @Get('allUsers')
    async getUserPegination(@Query() query) {
        return await this.userService.getUserPegination(query);
    }


    // create users
    @Post()
    @UsePipes(ValidationPipe)
    async creatQuiz(@Body() userdata: UserDto): Promise<User> {
        return await this.userService.creatUser(userdata);

    }

    // change status of user- isActive or not 
    @Put('status')  // 1 to activate and 0 to deactivate
    async update_status(@Body() body) {
        return await this.userService.update_status(body);
    }
}

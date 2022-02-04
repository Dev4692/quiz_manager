import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    // api to create user

    async creatUser(userDto: UserDto): Promise<User> {
        const user = new User(userDto);
        await user.save();
        return user.reload();
    }

    // api to get all users

    async getAllUser() {
        let user = await this.userModel.findAll();
        return user;

    }

    // api to get user by primary key i.e. email id
    async getUserByPk(email) {
        const user = await this.userModel.findByPk(email)
        return user;
    }
}

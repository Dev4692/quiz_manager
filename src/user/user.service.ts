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
        let active_users = await this.userModel.count({
            where: {
                isActive: 1
            }
        })
        let inActive_users = await this.userModel.count({
            where: {
                isActive: 0
            }
        })
        return {
            active_users,
            inActive_users,
            user,

        };

    }

    async getActiveUsers(isActive) {
        let user = await this.userModel.findAll({
            where: {
                isActive: isActive
            }
        });
        return user;
    }

    // api to get user by primary key i.e. email id
    async getUserByPk(email) {
        const user = await this.userModel.findByPk(email)
        return user;
    }

    async getUserPegination(query) {
        console.log(`query.p type===========${typeof (query.p)}`);
        // const page = parseInt(query.p);
        const page = parseInt(query.p)
        const perPage = parseInt(query.pp);
        let offset = (page - 1) * perPage;
        let limit = perPage;
        let data;
        console.log(`page=====${page}-----perPage=====${perPage}`)

        try {
            data = await this.userModel.findAndCountAll({
                order: [
                    ['createdAt', 'DESC']
                ],
                offset: 0,
                limit: 10
            });
            return data;
        } catch (error) {
            // console.log(error)
            return error
        }

        console.log(`data=====${JSON.stringify(data)}`);
    }

    async update_status(body) {

        let updateObj = {};
        updateObj['isActive'] = body.isActive;
        let account = await this.userModel.findByPk(body.email);
        return await account.update(updateObj);

    }
}

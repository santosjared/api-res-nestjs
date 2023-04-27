import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private UserModel:Model<UsersDocument>
  ){}
  async create(createUserDto: CreateUserDto) {
    const userCteate = await this.UserModel.create(createUserDto);
    return userCteate;
  }

  async findAll() {
    const findUsers = await this.UserModel.find();
    return findUsers;
  }

  async findOne(id: string) {
    const findUser = await this.UserModel.findById(id);
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.UserModel.findByIdAndUpdate(id, updateUserDto)
    return updateUser;
  }

  async remove(id: string) {
    const rmUser = await this.UserModel.findByIdAndDelete(id)
    return rmUser;
  }
}

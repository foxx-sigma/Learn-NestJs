import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(_createUserDto: CreateUserDto) {
    try {
      const { name, email, password } = _createUserDto;
      const CreateUser = await this.prisma.user.create({
        data: { name, email, password },
      });
      return {
        success: true,
        data: CreateUser,
        message: 'User Created Successfully',
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Something went wrong: $(error.message)',
      };
    }
  }

  async findAll() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const users = await this.prisma.user.findMany();
      return {
        success: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: users,
        message: 'User Data Found Successfully',
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Failed to fetch user data',
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

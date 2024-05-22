import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, 10),
      userType: createUserDto.userType,
    };
    const createUser = await this.prisma.user.create({ data });

    return {
      ...createUser,
      password: undefined,
    };
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = this.prisma.user.update({
      data: {
        name: updateUserDto.name,
        age: updateUserDto.age,
        email: updateUserDto.email,
        height: updateUserDto.height,
        weight: updateUserDto.weight,
        specialty: updateUserDto.specialty,
        patients: updateUserDto.patientIds
          ? {
              set: updateUserDto.patientIds.map((patientId) => ({
                id: patientId,
              })),
            }
          : undefined,
      },
      where: { id },
    });

    return { ...updateUser, password: undefined };
  }

  async getUser(id: string) {
    const user = this.prisma.user.findFirst({
      where: { id },
      include: { foods: true, patients: true },
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return `deleted user`;
  }
}

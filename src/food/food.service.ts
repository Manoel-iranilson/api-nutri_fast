import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class FoodService {
  constructor(private prisma: PrismaService) {}

  async addFood(userId: string, foodId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        foods: {
          connect: { id: foodId },
        },
      },
    });

    return 'comida adicionada';
  }

  async createFood(createFoodDto: CreateFoodDto) {
    return this.prisma.food.create({
      data: {
        name: createFoodDto.name,
        calories: createFoodDto.calories,
        type: createFoodDto.type,
        ingredients: createFoodDto.ingredients,
        image: createFoodDto.image,
      },
    });
  }

  async getFoods() {
    return this.prisma.food.findMany({});
  }
}

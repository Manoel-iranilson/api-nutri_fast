import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateFoodDto } from './dto/create-food.dto';
import { FoodService } from './food.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { AddFoodDto } from './dto/add-food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  addFood(@CurrentUser() user: User, @Body() addFoodDto: AddFoodDto) {
    return this.foodService.addFood(user.id, addFoodDto.id);
  }

  @IsPublic()
  @Post('/create')
  createFood(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.createFood(createFoodDto);
  }

  @IsPublic()
  @Get()
  getFoods() {
    return this.foodService.getFoods();
  }
}

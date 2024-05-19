import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateFoodDto } from './dto/create-food.dto';
import { FoodService } from './food.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  // @Post()
  // addFood(@CurrentUser() user: User, @Body() createFoodDto: CreateFoodDto) {
  //   return this.foodService.addFood(user.id, createFoodDto);
  // }

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

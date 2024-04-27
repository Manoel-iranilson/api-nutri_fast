import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { CreateFoodDto } from './dto/create-food.dto';
import { FoodService } from './food.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @IsPublic()
  @Post()
  @HttpCode(HttpStatus.OK)
  createFood(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.createFood(createFoodDto);
  }

  @IsPublic()
  @Get()
  getFoods() {
    return this.foodService.getFoods();
  }
}

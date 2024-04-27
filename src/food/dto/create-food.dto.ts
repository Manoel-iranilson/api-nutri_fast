import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { Food } from '../entities/food.entity';

export class CreateFoodDto extends Food {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  calories: number;

  @IsNotEmpty()
  @IsArray()
  ingredients: string[];

  @IsNotEmpty()
  @IsString()
  type: string;

  image?: string;
}

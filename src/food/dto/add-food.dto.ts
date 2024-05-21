import { IsString } from 'class-validator';

export class AddFoodDto {
  @IsString()
  id: string;
}

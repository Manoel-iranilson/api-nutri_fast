import { User } from '../entities/user.entity';
import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends User {
  @IsString()
  id: string;

  @IsEmail()
  email?: string;

  @IsOptional()
  name?: string;
  @IsOptional()
  age?: number;
  @IsOptional()
  height?: number;
  @IsOptional()
  weight?: number;

  @IsOptional()
  specialty?: string;

  @IsArray()
  @IsOptional()
  patientIds?: string[];
}

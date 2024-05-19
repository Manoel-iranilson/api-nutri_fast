import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsOptional()
  userType: 'PATIENT' | 'PROFESSIONAL';

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
}

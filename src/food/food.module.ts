import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';

@Module({
  controllers: [FoodController],
  providers: [FoodService, PrismaService],
  exports: [FoodService],
})
export class FoodModule {}

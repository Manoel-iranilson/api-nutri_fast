import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { ProfessionalService } from './professional.service';
import { ProfessionalController } from './professional.controller';

@Module({
  controllers: [ProfessionalController],
  providers: [ProfessionalService, PrismaService],
  exports: [ProfessionalService],
})
export class ProfessionalModule {}

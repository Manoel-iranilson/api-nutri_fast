import { Controller, Get } from '@nestjs/common';

import { ProfessionalService } from './professional.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @IsPublic()
  @Get()
  getProfessionals() {
    return this.professionalService.getProfessionals();
  }
}

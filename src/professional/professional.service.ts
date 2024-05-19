import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProfessionalService {
  constructor(private prisma: PrismaService) {}

  async getProfessionals() {
    const users = this.prisma.user.findMany({
      where: { userType: 'PROFESSIONAL' },
      include: { patients: true },
    });
    return users;
  }
}

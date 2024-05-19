import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { FoodModule } from './food/food.module';
import { ChatGateway } from './chat/chat.gateway';
import { ProfessionalModule } from './professional/professional.module';

@Module({
  imports: [UserModule, AuthModule, FoodModule, ProfessionalModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    ChatGateway,
  ],
})
export class AppModule {}

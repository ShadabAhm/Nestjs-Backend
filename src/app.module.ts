import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './sseNotificationEvents/events.controller';
import { EventsModule } from './sseNotificationEvents/events.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';


@Module({
  imports: [EventsModule, AuthModule],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}

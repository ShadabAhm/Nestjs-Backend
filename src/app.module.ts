import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './sseNotificationEvents/events.controller';
import { EventsModule } from './sseNotificationEvents/events.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [EventsModule, AuthModule, ChatModule],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}

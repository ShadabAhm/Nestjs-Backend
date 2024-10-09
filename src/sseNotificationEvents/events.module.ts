import { Module } from '@nestjs/common';
import { EventsController } from '../sseNotificationEvents/events.controller';

@Module({
  controllers: [EventsController],
})
export class EventsModule {}

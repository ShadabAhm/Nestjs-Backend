import { Controller, Sse } from '@nestjs/common';
import { interval, Observable, take } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageEvent } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Sse('sse')
  sendEvents(): Observable<MessageEvent> {
    return interval(1000).pipe(
        take(5),
        map((num: number) => ({
            data: { message: `Hello! Notifivation number ${num}` },
            // lastEventId: `${num}`,
        }))
    );
  }
}

import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3002, {
  cors: {
    origin: "*"
  }
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server

  handleConnection(client: Socket) {
    console.log('New user connected....', client.id);

    client.broadcast.emit('user-joined', { message: `New User joined the chat: ${client.id}` })
  }

  handleDisconnect(client: Socket) {
    console.log('New user disconnected....', client.id);
    this.server.emit('user-left', { message: `User left the chat: ${client.id}` })

  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, message: any) {
    console.log('Received message:', message);
    client.emit('reply', 'This is reply')

    this.server.emit('reply', 'broadcasting...')
  }
}

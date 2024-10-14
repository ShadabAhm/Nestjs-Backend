import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket!: Socket;

  constructor() {
    this.connect();
  }

  connect(): void {
    this.socket = io('http://localhost:3002');
    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });
  }

  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  onMessage(callback: (data: any) => void): void {
    this.socket.on('message', (data: any) => {
      callback(data);
    });
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello sourav rai!';
  }
  findAll(): string {
    return 'Hello from the other side!';
  }
}

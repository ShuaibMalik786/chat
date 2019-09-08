import { MessageService } from './../service/message.service';
import { MessageDto } from './../validation/message';
import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';

@Controller('api/message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getAll() {
    return 'message controller';
  }

  @Post()
  createRoom(@Body() roomDto: MessageDto) {
    let room = this.messageService.create(roomDto);
    return room;
  }
}

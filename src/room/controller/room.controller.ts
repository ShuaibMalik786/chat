import { Controller, Get, Post, Body } from '@nestjs/common';
import { RoomService } from '../service/room.service';
import { RoomDto } from '../validation/room';

@Controller('api/chat/room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getHello(): string {
    return 'ddsf';
  }

  @Post()
  createRoom(@Body() roomDto: RoomDto) {
    let room = this.roomService.create(roomDto);
    return room;
  }
}

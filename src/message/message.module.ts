import { MessageService } from './service/message.service';
import { MessageSchema } from './schema/message';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './controller/message.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Message', schema: MessageSchema },
    ]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}

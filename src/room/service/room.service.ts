import { HttpErrorFilter } from './../../core/filter/http-error.filter';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as _ from 'lodash';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly roomModel: Model) {}

  // Create room
  async create(room) {
    try {
      const roomCreated = new this.roomModel(room);
      return await roomCreated.save();
    } catch (err) {
      throw new HttpException(
        err.errmsg,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

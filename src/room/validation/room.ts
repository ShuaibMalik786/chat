import {
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsBoolean,
  ValidateNested,
  IsDefined,
  ArrayNotEmpty,
  IsMongoId,
  ArrayUnique,
} from 'class-validator';
import { Type } from 'class-transformer';

export class RoomDto {
  @MaxLength(255)
  @MinLength(1)
  readonly name: string;

  users: any;

  messages: any;
}

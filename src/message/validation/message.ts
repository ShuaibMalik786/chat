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
  
  export class MessageDto {
    @MaxLength(255)
    @MinLength(1)
    readonly name: string;
  
    users: any;
  
    room: any;
  }
  
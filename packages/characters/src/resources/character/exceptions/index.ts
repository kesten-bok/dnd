import { HttpException, HttpStatus } from '@nestjs/common';

export class CharacterNameUniqueException extends HttpException {
  constructor() {
    super('Character name must be unique', HttpStatus.BAD_REQUEST);
  }
}

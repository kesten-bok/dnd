import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CharacterModule } from './resources/character/character.module';

import ENVIRONMENT from './config/env';

@Module({
  imports: [MongooseModule.forRoot(ENVIRONMENT.MONGO_URI), CharacterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

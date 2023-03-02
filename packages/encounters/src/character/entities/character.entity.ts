// @todo: This should live in a character service

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CharacterDocument = HydratedDocument<Character>;

@Schema()
export class Character {
  @Prop()
  name: string;

  @Prop()
  class: string;

  @Prop()
  race: string;

  @Prop()
  age: number;

  @Prop()
  currentHealth: number;

  @Prop()
  maxHealth: number;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);

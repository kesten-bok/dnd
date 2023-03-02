import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  name: string;

  @IsString()
  class: string;

  @IsString()
  race: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsInt()
  currentHealth: number;

  @IsInt()
  @IsPositive()
  maxHealth: number;
}

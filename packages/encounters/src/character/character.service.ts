import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './entities/character.entity';
import { CharacterNameUniqueException } from './exceptions';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name)
    private characterModule: Model<CharacterDocument>,
  ) {}

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const possibleCharacter = await this.characterModule
      .findOne({
        name: createCharacterDto.name,
      })
      .exec();

    if (possibleCharacter !== null) {
      throw new CharacterNameUniqueException();
    }

    const character = await this.characterModule.create(createCharacterDto);

    return character.save();
  }

  findAll(): Promise<Character[]> {
    return this.characterModule.find().exec();
  }

  findOne(id: number): Promise<Character | null> {
    return this.characterModule.findById(id).exec();
  }

  async update(
    id: number,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<Character> {
    const character = await this.characterModule.findById(id).exec();

    if (character === null) {
      throw new Error(`No character found with id: ${id}`);
    }

    return character.updateOne(updateCharacterDto).exec();
  }

  remove(id: number): void {
    this.characterModule.findByIdAndDelete(id);
  }
}

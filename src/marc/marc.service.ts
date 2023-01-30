import { Injectable } from '@nestjs/common';
import { CreateMarcDto } from './dto/create-marc.dto';
import { UpdateMarcDto } from './dto/update-marc.dto';

@Injectable()
export class MarcService {
  create(createMarcDto: CreateMarcDto) {
    return 'This action adds a new marc';
  }

  findAll() {
    return `This action returns all marc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marc`;
  }

  update(id: number, updateMarcDto: UpdateMarcDto) {
    return `This action updates a #${id} marc`;
  }

  remove(id: number) {
    return `This action removes a #${id} marc`;
  }
}

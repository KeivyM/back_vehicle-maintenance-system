import { Injectable } from '@nestjs/common';
import { CreateEmplDto } from './dto/create-empl.dto';
import { UpdateEmplDto } from './dto/update-empl.dto';

@Injectable()
export class EmplService {
  create(createEmplDto: CreateEmplDto) {
    return 'This action adds a new empl';
  }

  findAll() {
    return `This action returns all empl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empl`;
  }

  update(id: number, updateEmplDto: UpdateEmplDto) {
    return `This action updates a #${id} empl`;
  }

  remove(id: number) {
    return `This action removes a #${id} empl`;
  }
}

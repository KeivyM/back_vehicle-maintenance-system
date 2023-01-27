import { Injectable } from '@nestjs/common';
import { CreateVehiDto } from './dto/create-vehi.dto';
import { UpdateVehiDto } from './dto/update-vehi.dto';

@Injectable()
export class VehiService {
  create(createVehiDto: CreateVehiDto) {
    return 'This action adds a new vehi';
  }

  findAll() {
    return `This action returns all vehi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehi`;
  }

  update(id: number, updateVehiDto: UpdateVehiDto) {
    return `This action updates a #${id} vehi`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehi`;
  }
}

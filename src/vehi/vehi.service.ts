import { Injectable, Logger } from '@nestjs/common';
import { CreateVehiDto } from './dto/create-vehi.dto';
import { UpdateVehiDto } from './dto/update-vehi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehi } from './entities/vehi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiService {
  private readonly logger = new Logger('SolicitudMantenimientoService');
  constructor(
    @InjectRepository(Vehi)
    private readonly vehiculos: Repository<Vehi>,
  ) {}

  // create(createVehiDto: CreateVehiDto) {
  //   return 'This action adds a new vehi';
  // }

  async findAll() {
    return await this.vehiculos.find({
      relations: {
        id_marc: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.vehiculos.findOneBy({ id_carr: id });
  }

  // update(id: number, updateVehiDto: UpdateVehiDto) {
  //   return `This action updates a #${id} vehi`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} vehi`;
  // }
}

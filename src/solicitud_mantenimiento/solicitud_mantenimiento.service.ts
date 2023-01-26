import { Injectable, Logger } from '@nestjs/common';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolicitudMantenimientoDto } from './dto/create-solicitud_mantenimiento.dto';
import { UpdateSolicitudMantenimientoDto } from './dto/update-solicitud_mantenimiento.dto';
import { SolicitudMantenimiento } from './entities/solicitud_mantenimiento.entity';

@Injectable()
export class SolicitudMantenimientoService {
  private readonly logger = new Logger('SolicitudMantenimientoService');
  constructor(
    @InjectRepository(SolicitudMantenimiento)
    private readonly solicitudMantenimientoRepository: Repository<SolicitudMantenimiento>,
  ) {}

  async create(
    createSolicitudMantenimientoDto: CreateSolicitudMantenimientoDto,
  ) {
    try {
      const solicitud = this.solicitudMantenimientoRepository.create(
        createSolicitudMantenimientoDto,
      );

      await this.solicitudMantenimientoRepository.save(solicitud);

      return solicitud;
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException(error.detail);
      }
      this.logger.error(error);
      throw new InternalServerErrorException('error aqui');
    }
  }

  async findAll() {
    return await this.solicitudMantenimientoRepository.find();
  }

  async findOne(id: string) {
    return await this.solicitudMantenimientoRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateSolicitudMantenimientoDto: UpdateSolicitudMantenimientoDto,
  ) {
    return `This action updates a #${id} solicitudMantenimiento`;
  }

  async remove(id: string) {
    const solicitud = await this.findOne(id);
    await this.solicitudMantenimientoRepository.remove(solicitud);
  }
}

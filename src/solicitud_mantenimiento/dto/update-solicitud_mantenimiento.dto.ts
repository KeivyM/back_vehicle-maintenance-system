import { PartialType } from '@nestjs/swagger';
import { CreateSolicitudMantenimientoDto } from './create-solicitud_mantenimiento.dto';

export class UpdateSolicitudMantenimientoDto extends PartialType(CreateSolicitudMantenimientoDto) {}

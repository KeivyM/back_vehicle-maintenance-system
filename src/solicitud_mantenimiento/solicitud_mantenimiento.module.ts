import { Module } from '@nestjs/common';
import { SolicitudMantenimientoService } from './solicitud_mantenimiento.service';
import { SolicitudMantenimientoController } from './solicitud_mantenimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudMantenimiento } from './entities/solicitud_mantenimiento.entity';
import { Empl } from '../empl/entities/empl.entity';
import { Vehi } from '../vehi/entities/vehi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudMantenimiento, Empl, Vehi])],
  controllers: [SolicitudMantenimientoController],
  providers: [SolicitudMantenimientoService],
})
export class SolicitudMantenimientoModule {}

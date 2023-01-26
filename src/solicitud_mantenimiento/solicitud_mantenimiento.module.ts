import { Module } from '@nestjs/common';
import { SolicitudMantenimientoService } from './solicitud_mantenimiento.service';
import { SolicitudMantenimientoController } from './solicitud_mantenimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudMantenimiento } from './entities/solicitud_mantenimiento.entity';

@Module({
  controllers: [SolicitudMantenimientoController],
  providers: [SolicitudMantenimientoService],
  imports: [TypeOrmModule.forFeature([SolicitudMantenimiento])],
})
export class SolicitudMantenimientoModule {}

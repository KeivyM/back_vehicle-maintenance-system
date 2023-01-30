import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SolicitudMantenimientoService } from './solicitud_mantenimiento.service';
import { CreateSolicitudMantenimientoDto } from './dto/create-solicitud_mantenimiento.dto';
// import { UpdateSolicitudMantenimientoDto } from './dto/update-solicitud_mantenimiento.dto';

@Controller('solicitud-mantenimiento')
export class SolicitudMantenimientoController {
  constructor(
    private readonly solicitudMantenimientoService: SolicitudMantenimientoService,
  ) {}

  @Post()
  create(
    @Body() createSolicitudMantenimientoDto: CreateSolicitudMantenimientoDto,
  ) {
    return this.solicitudMantenimientoService.create(
      createSolicitudMantenimientoDto,
    );
  }

  @Get()
  findAll() {
    return this.solicitudMantenimientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudMantenimientoService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSolicitudMantenimientoDto: UpdateSolicitudMantenimientoDto,
  // ) {
  //   return this.solicitudMantenimientoService.update(
  //     +id,
  //     updateSolicitudMantenimientoDto,
  //   );
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.solicitudMantenimientoService.remove(id);
  // }
}

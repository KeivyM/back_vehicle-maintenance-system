import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiService } from './vehi.service';
import { CreateVehiDto } from './dto/create-vehi.dto';
import { UpdateVehiDto } from './dto/update-vehi.dto';

@Controller('vehi')
export class VehiController {
  constructor(private readonly vehiService: VehiService) {}

  @Post()
  create(@Body() createVehiDto: CreateVehiDto) {
    return this.vehiService.create(createVehiDto);
  }

  @Get()
  findAll() {
    return this.vehiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehiDto: UpdateVehiDto) {
    return this.vehiService.update(+id, updateVehiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiService.remove(+id);
  }
}

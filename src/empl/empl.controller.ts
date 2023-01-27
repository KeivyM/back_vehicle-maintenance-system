import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmplService } from './empl.service';
import { CreateEmplDto } from './dto/create-empl.dto';
import { UpdateEmplDto } from './dto/update-empl.dto';

@Controller('empl')
export class EmplController {
  constructor(private readonly emplService: EmplService) {}

  @Post()
  create(@Body() createEmplDto: CreateEmplDto) {
    return this.emplService.create(createEmplDto);
  }

  @Get()
  findAll() {
    return this.emplService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emplService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmplDto: UpdateEmplDto) {
    return this.emplService.update(+id, updateEmplDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emplService.remove(+id);
  }
}

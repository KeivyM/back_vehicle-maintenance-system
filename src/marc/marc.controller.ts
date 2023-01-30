import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcService } from './marc.service';
import { CreateMarcDto } from './dto/create-marc.dto';
import { UpdateMarcDto } from './dto/update-marc.dto';

@Controller('marc')
export class MarcController {
  constructor(private readonly marcService: MarcService) {}

  @Post()
  create(@Body() createMarcDto: CreateMarcDto) {
    return this.marcService.create(createMarcDto);
  }

  @Get()
  findAll() {
    return this.marcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarcDto: UpdateMarcDto) {
    return this.marcService.update(+id, updateMarcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { VehiService } from './vehi.service';
import { VehiController } from './vehi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehi } from './entities/vehi.entity';
import { Modelo } from 'src/entities/modelo/modelo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehi, Modelo])],
  controllers: [VehiController],
  providers: [VehiService],
})
export class VehiModule {}

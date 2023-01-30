import { Module } from '@nestjs/common';
import { VehiService } from './vehi.service';
import { VehiController } from './vehi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehi } from './entities/vehi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehi])],
  controllers: [VehiController],
  providers: [VehiService],
})
export class VehiModule {}

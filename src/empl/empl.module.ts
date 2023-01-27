import { Module } from '@nestjs/common';
import { EmplService } from './empl.service';
import { EmplController } from './empl.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empl } from './entities/empl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empl])],
  controllers: [EmplController],
  providers: [EmplService],
})
export class EmplModule {}

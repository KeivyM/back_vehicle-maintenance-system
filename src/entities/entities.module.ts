import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehi } from './vehi/vehi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehi])],
})
export class EntitiesModule {}

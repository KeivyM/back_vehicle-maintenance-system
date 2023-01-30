import { Module } from '@nestjs/common';
import { MarcService } from './marc.service';
import { MarcController } from './marc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marc } from './entities/marc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Marc])],
  controllers: [MarcController],
  providers: [MarcService],
})
export class MarcModule {}

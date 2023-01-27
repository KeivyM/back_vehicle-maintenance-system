import { Module } from '@nestjs/common';
import { VehiService } from './vehi.service';
import { VehiController } from './vehi.controller';

@Module({
  controllers: [VehiController],
  providers: [VehiService]
})
export class VehiModule {}

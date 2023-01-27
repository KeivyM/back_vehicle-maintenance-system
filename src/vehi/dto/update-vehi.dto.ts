import { PartialType } from '@nestjs/swagger';
import { CreateVehiDto } from './create-vehi.dto';

export class UpdateVehiDto extends PartialType(CreateVehiDto) {}

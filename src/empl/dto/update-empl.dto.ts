import { PartialType } from '@nestjs/swagger';
import { CreateEmplDto } from './create-empl.dto';

export class UpdateEmplDto extends PartialType(CreateEmplDto) {}

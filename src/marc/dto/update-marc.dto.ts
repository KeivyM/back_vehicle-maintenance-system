import { PartialType } from '@nestjs/swagger';
import { CreateMarcDto } from './create-marc.dto';

export class UpdateMarcDto extends PartialType(CreateMarcDto) {}

import { IsString, MinLength, IsNumber, MaxLength } from 'class-validator';

export class CreateEmplDto {
  @IsString()
  @MinLength(1)
  @MaxLength(12)
  id_empl: string;

  @IsString()
  @MinLength(1)
  nomb_empl: string;

  @IsString()
  @MinLength(1)
  apel_empl: string;

  @IsString()
  @MinLength(1)
  dire_empl: string;

  @IsString()
  @MinLength(1)
  tele_empl: string;

  @IsNumber()
  @MinLength(1)
  stat_empl: number;
}

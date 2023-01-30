import { MaxLength, MinLength, IsString } from 'class-validator';

export class CreateVehiDto {
  @IsString()
  @MinLength(1)
  @MaxLength(8)
  id_carr: string;

  @IsString()
  @MinLength(1)
  idMarcIdMarc: string;

  @IsString()
  @MinLength(1)
  anno_carr: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  colo_carr: string;

  @IsString()
  @MinLength(1)
  fech_comp: string;

  @IsString()
  @MinLength(1)
  id_empl: string;

  @IsString()
  @MinLength(1)
  id_mode: string;
}

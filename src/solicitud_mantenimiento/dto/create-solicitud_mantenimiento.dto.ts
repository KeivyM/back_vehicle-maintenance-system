import { IsString, IsPositive, MinLength } from 'class-validator';
import { OneToOne } from 'typeorm';

export class CreateSolicitudMantenimientoDto {
  // @OneToOne(
  //   () =>
  // )
  // id_carr;
  // id_empl;
  // id_mant_prev;
  // @IsPositive()

  // @IsString()
  // @MinLength(1)
  // id: string;

  @IsString()
  @MinLength(1)
  kilo_actual: string;
  // @IsString()
  // @IsPositive()
  // @MinLength(1)
  // kilo_prox: string;
  // fech_solic;
}

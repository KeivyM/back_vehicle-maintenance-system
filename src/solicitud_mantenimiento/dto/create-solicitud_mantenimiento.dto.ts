import { IsString, IsPositive, MinLength, MaxLength } from 'class-validator';
import { OneToOne } from 'typeorm';

export class CreateSolicitudMantenimientoDto {
  // @PrimaryGeneratedColumn()
  // id: string;
  // @OneToOne(
  //   () =>
  // )
  // id_carr;
  // id_empl;
  // id_mant_prev;
  // @IsPositive()

  @IsString()
  @MinLength(1)
  @MaxLength(12)
  id_sol: string;

  @IsString()
  @MinLength(1)
  kilo_actual: string;
  // @IsString()
  // @IsPositive()
  // @MinLength(1)
  // kilo_prox: string;
  // fech_solic;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { SolicitudMantenimiento } from '../../solicitud_mantenimiento/entities/solicitud_mantenimiento.entity';

@Entity()
export class Empl {
  @PrimaryColumn('char', {
    length: 12,
    unique: true,
  })
  id_empl: string;

  @Column('char', { length: 30 })
  nomb_empl: string;

  @Column('char', { length: 30 })
  apel_empl: string;

  @Column('varchar', { length: 100 })
  dire_empl: string;

  @Column('char', { length: 12 })
  tele_empl: string;

  @Column('tinyint') //
  stat_empl: number;

  @OneToMany(
    () => SolicitudMantenimiento,
    (SolicitudMantenimiento) => SolicitudMantenimiento,
  )
  @JoinColumn()
  solicitudes: SolicitudMantenimiento;
}

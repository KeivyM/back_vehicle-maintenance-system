import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { SolicitudMantenimiento } from '../../solicitud_mantenimiento/entities/solicitud_mantenimiento.entity';
// import { Marc } from '../marc/marc.entity';
import { Marc } from '../../entities/marc/marc.entity';

@Entity()
export class Vehi {
  @PrimaryColumn('char', {
    length: 8,
    unique: true,
    nullable: false,
  })
  id_carr: string;

  @Column('year', { nullable: false })
  anno_carr: string;

  @Column('varchar', { default: 'Defecto', length: 20, nullable: false })
  colo_carr: string;

  @Column('date', { nullable: false })
  fech_comp: string;

  @Column('char', { nullable: false, length: 1 })
  id_empl: string;

  @OneToMany(
    () => SolicitudMantenimiento,
    (SolicitudMantenimiento) => SolicitudMantenimiento,
  )
  @JoinColumn()
  solicitudes: SolicitudMantenimiento;

  @ManyToOne(() => Marc, (empl) => empl, { nullable: false })
  @JoinColumn()
  id_marc: Marc;

  // @Column('tinyint', { nullable: false })
  // id_marc: number;.
}

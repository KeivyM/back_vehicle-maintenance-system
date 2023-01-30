import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { SolicitudMantenimiento } from '../../solicitud_mantenimiento/entities/solicitud_mantenimiento.entity';
import { Marc } from '../../marc/entities/marc.entity';
import { Modelo } from 'src/entities/modelo/modelo.entity';

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
  //
  @OneToMany(
    () => SolicitudMantenimiento,
    (SolicitudMantenimiento) => SolicitudMantenimiento,
  )
  @JoinColumn()
  solicitudes: SolicitudMantenimiento;

  @ManyToOne(() => Marc, (marc) => marc, { nullable: false })
  @JoinColumn()
  id_marc: Marc;

  @ManyToOne(() => Modelo, (modelo) => modelo, { nullable: false })
  @JoinColumn()
  id_mode: Modelo;

  // @Column('tinyint', { nullable: false })
  // id_marc: number;.
}

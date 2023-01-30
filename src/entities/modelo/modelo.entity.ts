import { Vehi } from 'src/vehi/entities/vehi.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { SolicitudMantenimiento } from '../../solicitud_mantenimiento/entities/solicitud_mantenimiento.entity';
// import { Vehi } from '../vehi/vehi.entity';

@Entity()
export class Modelo {
  @PrimaryColumn('tinyint', {
    unique: true,
    nullable: false,
  })
  id_mode: string;

  @Column('char', { length: 30, nullable: false, default: 'Defecto' })
  desc_mode: string;

  @Column('tinyint', { nullable: false, default: 1 })
  stat_mode: number;

  @OneToMany(() => Vehi, (vehi) => vehi, { nullable: false })
  @JoinColumn()
  vehiculo: Vehi;

  // @OneToMany(() => Vehi, (vehi) => vehi, { nullable: false })
  // @JoinColumn()
  // vehiculos: Vehi;

  // @ManyToOne(() => Vehi, (vehi) => vehi, { nullable: false })
  // @JoinColumn()
  // id_carr: Vehi;
}

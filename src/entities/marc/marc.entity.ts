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
export class Marc {
  @PrimaryColumn('tinyint', {
    unique: true,
    nullable: false,
  })
  id_marc: string;

  @Column('tinyint', { nullable: false, default: 1 })
  stat_marc: number;

  @Column('char', { length: 30, nullable: false, default: 'Defaecto' })
  desc_marc: string;

  @OneToMany(() => Vehi, (vehi) => vehi, { nullable: false })
  @JoinColumn()
  vehiculos: Vehi;

  // @ManyToOne(() => Vehi, (vehi) => vehi, { nullable: false })
  // @JoinColumn()
  // id_carr: Vehi;
}

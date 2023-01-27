import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Empl } from '../../empl/entities/empl.entity';

@Entity()
export class SolicitudMantenimiento {
  // @PrimaryGeneratedColumn('increment')
  // @Column()
  @PrimaryColumn()
  id_sol: string;
  //
  // kilo_actual: string;
  // kilo_prox: string

  @Column('char')
  kilo_actual: string;

  @OneToOne(() => Empl)
  @JoinColumn()
  id_empl: Empl;
  //

  // @Column('numeric', { default: 0 })
  // numero:number

  // @Column({ type: 'text', nullable: true})
  // texto:string

  // @Column({ type: 'int', default:0}) //tipo entero
  // texto:number

  // @Column({ type: 'float', default:0}) //tipo entero
  // texto:number
}

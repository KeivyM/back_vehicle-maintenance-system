import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Empl } from '../../empl/entities/empl.entity';
import { ManyToOne } from 'typeorm';
// import { Vehi } from '../../entities/vehi/vehi.entity';
import { Vehi } from '../../vehi/entities/vehi.entity';

@Entity()
export class SolicitudMantenimiento {
  // @PrimaryGeneratedColumn('increment')
  // @Column()
  @PrimaryColumn()
  id_sol: string;
  //
  // kilo_actual: string;
  // kilo_prox: string

  @Column('char', { length: 15 })
  kilo_actual: string;

  @Column('int')
  cost_manteni: number;

  @Column('date')
  prox_manteni: Date;

  // @OneToOne(() => Empl, { nullable: false })
  // @JoinColumn()
  // id_empl: Empl;//

  @ManyToOne(() => Empl, (empl) => empl, { nullable: false })
  @JoinColumn()
  id_empl: Empl;

  @ManyToOne(() => Vehi, (vehi) => vehi, { nullable: false })
  @JoinColumn()
  id_carr: Vehi;
  //
  // @Column({ nullable: false })
  // @Column('numeric', { default: 0 })
  // numero:number/

  // @Column({ type: 'text', nullable: true})
  // texto:string

  // @Column({ type: 'int', default:0}) //tipo entero
  // texto:number
}

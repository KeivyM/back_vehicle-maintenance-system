import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SolicitudMantenimiento {
  @PrimaryGeneratedColumn()
  id: string;

  // kilo_actual: string;
  // kilo_prox: string;

  @Column('text')
  kilo_actual: string;

  // @OneToOne(()=>Carro);
  // id_carr:Carro

  // @Column('numeric', { default: 0 })
  // numero:number

  // @Column({ type: 'text', nullable: true})
  // texto:string

  // @Column({ type: 'int', default:0}) //tipo entero
  // texto:number

  // @Column({ type: 'float', default:0}) //tipo entero
  // texto:number
}

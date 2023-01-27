import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  @Column('tinyint', { nullable: false })
  id_marc: number;
}

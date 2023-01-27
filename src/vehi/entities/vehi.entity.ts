import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Vehi {
  // @PrimaryGeneratedColumn()
  @PrimaryColumn('char', {
    length: 12,
    unique: true,
  })
  id_carr: string;

  @Column('char')
  anno_carr: string;

  @Column('char')
  colo_carr: string;

  @Column('varchar')
  fech_comp: string;

  @Column('char')
  id_empl: string;

  @Column('tinyint')
  id_marc: number;
}

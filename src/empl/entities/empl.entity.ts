import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Empl {
  // @PrimaryGeneratedColumn()
  @PrimaryColumn('char', {
    length: 12,
    unique: true,
  })
  id_empl: string;
  //

  @Column('char')
  nomb_empl: string;

  @Column('char')
  apel_empl: string;

  @Column('varchar')
  dire_empl: string;

  @Column('char')
  tele_empl: string;

  @Column('tinyint')
  stat_empl: number;
}

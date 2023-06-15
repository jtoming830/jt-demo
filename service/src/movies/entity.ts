import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('main')
export class Movie {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;
}

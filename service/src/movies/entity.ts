import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class MovieEditable {
  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  score: number;

  @Column()
  description: string;

  @Column()
  comment: string;

  @Column()
  year: number;
}

@Entity('main')
export class Movie extends MovieEditable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}

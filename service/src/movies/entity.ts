import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

type Genre =
  | 'comedy'
  | 'horror'
  | 'fantasy'
  | 'drama'
  | 'action'
  | 'sci-fi'
  | 'crime'
  | 'biography'
  | 'history'
  | 'adventure'
  | 'thriller'
  | 'mystery';

export class MovieEditable {
  @Column()
  title?: string;

  @Column()
  image?: string;

  @Column()
  score?: number;

  @Column()
  description?: string;

  @Column()
  comment?: string;

  @Column()
  year?: number;

  @Column()
  watched?: boolean;

  @Column('text', { array: true })
  genre?: Genre[];

  @Column('text', { array: true })
  links?: string[];
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

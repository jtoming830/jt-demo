import { Injectable } from '@nestjs/common';
import { InjectRepository, generateString } from '@nestjs/typeorm';
import { Movie, MovieEditable } from './entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  findOne(id: string) {
    return this.movieRepository.findOneBy({ id: id });
  }

  async create(movie: MovieEditable) {
    const date = new Date().toISOString();
    const id = generateString();

    const movieExtended = {
      ...movie,
      id,
      createdAt: date,
      updatedAt: date,
    };

    await this.movieRepository.insert(movieExtended);

    return this.findOne(id);
  }

  findAll() {
    return this.movieRepository.find();
  }

  async update(id: string, movie: MovieEditable) {
    await this.movieRepository.update({ id }, movie);

    return this.findOne(id);
  }

  remove(id: string) {
    return this.movieRepository.delete({ id });
  }
}

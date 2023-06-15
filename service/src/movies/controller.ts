import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoviesService } from './service';
import { MovieEditable } from './entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() movie: MovieEditable) {
    return this.moviesService.create(movie);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() movie: MovieEditable) {
    return this.moviesService.update(id, movie);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}

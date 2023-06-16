import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MoviesModule } from './movies/module';

const serveStatic = (folder: string, isRoot = false) =>
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', `clients/${folder}`),
    serveRoot: isRoot ? '/' : `/${folder}`,
  });

@Module({
  imports: [
    serveStatic('cv', true),
    serveStatic('movies'),
    serveStatic('sample_landing'),
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

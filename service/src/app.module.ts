import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MoviesModule } from './movies/module';
import { AppController } from './app.controller';

const serveStatic = (folder: string) =>
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', `clients/${folder}`),
    serveRoot: `/${folder}`,
  });

@Module({
  imports: [
    serveStatic('cv'),
    serveStatic('movies'),
    serveStatic('sample_landing'),
    serveStatic('countries'),
    serveStatic('arch_studio'),
    serveStatic('photosnap'),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

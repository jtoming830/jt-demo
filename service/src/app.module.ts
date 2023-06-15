import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MoviesModule } from './movies/module';

console.log(join(__dirname, '..', 'client'));

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'clients/cv'),
      serveRoot: '/cv',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'clients/movies'),
      serveRoot: '/moviesrates',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'clients/sample_landing'),
      serveRoot: '/sample_landing',
    }),
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

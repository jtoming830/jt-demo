import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MoviesModule } from './movies/module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MoviesService } from './service';
import { MoviesController } from './controller';
import { Movie } from './entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './db/typeorm-config-service';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([Movie]),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

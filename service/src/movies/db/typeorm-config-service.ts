import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
  ) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const config = {
      type: this.configService.get('db.type'),
      host: this.configService.get('db.host'),
      port: this.configService.get('db.port'),
      database: this.configService.get('db.database'),
      username: this.configService.get('db.username'),
      password: this.configService.get('db.password'),
      schema: this.configService.get('db.schema'),
      entities: this.configService.get('db.entities'),
      migrationsRun: this.configService.get('db.migrationsRun'),
      migrations: this.configService.get('db.migrations'),
      synchronize: this.configService.get('db.synchronize'),
      dropSchema: this.configService.get('db.dropSchema'),
      migrationsTableName: this.configService.get('db.migrationsTableName'),
      ssl: this.configService.get('db.ssl'),
    };
    return config;
  }
}

import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Movie } from '../entity';

config();

export const dbConfig: () => DataSourceOptions = () => {
  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    schema: process.env.DATABASE_SCHEMA,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    entities: [Movie],
    synchronize: false,
    ssl: { rejectUnauthorized: false },
  };
};

const connectionSource = new DataSource({
  ...dbConfig(),
} as DataSourceOptions);

export default connectionSource;

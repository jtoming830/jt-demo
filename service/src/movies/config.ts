import { config } from 'dotenv';
import { dbConfig } from './db/ormconfig';

config();

export default () => {
  return {
    db: dbConfig(),
  };
};

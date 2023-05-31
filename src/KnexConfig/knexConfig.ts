import { Injectable } from '@nestjs/common';
import knex from 'knex';
import { dbConfig } from '../db/db_config';

@Injectable()
export class KnexConfig {
  instance: any;

  constructor() {
    this.instance = knex(dbConfig);
  }
}

import { Inject } from '@nestjs/common';
import { KnexConfig } from '../KnexConfig/knexConfig';

// @Injectable()
export class AuthRepository {
  @Inject() 
  private readonly KnexConfig: KnexConfig;

  register(user) {
    const knex = this.KnexConfig.instance;
    return knex('users').returning('*').insert(user);
  }

  login(user) {
    const knex = this.KnexConfig.instance;

    return knex.select('*').from('users').where({ user_name: user.user_name });
  }
}   

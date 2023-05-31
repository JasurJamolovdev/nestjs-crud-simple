import { Inject } from '@nestjs/common';
import { KnexConfig } from '../KnexConfig/knexConfig';

export class booksRepository {
  @Inject()
  private knexConfig: KnexConfig;

  getAllBooks() {
    const knex = this.knexConfig.instance;
    const Allbooks = knex.select('*').from('books');
    return Allbooks;
  }

  getOneBook(id) {
    const knex = this.knexConfig.instance;
    const foundBook = knex.select('*').from('books').where({ id: id.id });
    return foundBook;
  }

  createBook(book) {
    const knex = this.knexConfig.instance;
    return knex('books').insert(book);
  }

  updateBook(id, book) {
    const knex = this.knexConfig.instance;
    return knex('books').where({ id: id.id }).update(book);
  }

  deleteBook(id) {
    const knex = this.knexConfig.instance;
    return knex('books').where({ id: id.id }).del();
  }
}

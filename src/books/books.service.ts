import { Injectable } from '@nestjs/common';
import { booksRepository } from './book.repo';

@Injectable()
export class BooksService {
  constructor(private booksRepository: booksRepository) {}

  async booksGet() {
    const books = this.booksRepository.getAllBooks();
    return books;
  }

  async OneBook(id) {
    const oneBook = this.booksRepository.getOneBook(id);
    return oneBook;
  }

  async createBook(book) {
    return this.booksRepository.createBook(book);
  }

  async deleteBook(id) {
    return this.booksRepository.deleteBook(id);
  }

  async updateBook(id, book) {
    return this.booksRepository.updateBook(id, book);
  }
}

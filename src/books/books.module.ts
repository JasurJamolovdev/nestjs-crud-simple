import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { booksRepository } from './book.repo';
import { KnexConfig } from '../KnexConfig/knexConfig';

@Module({
  providers: [BooksService, booksRepository, KnexConfig],
  controllers: [BooksController],
})
export class BooksModule {}

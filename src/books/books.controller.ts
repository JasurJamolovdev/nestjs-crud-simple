import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { BooksService } from './books.service';
@Controller('book')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    return await this.booksService.booksGet();
  }
  @Get('/oneBook/:id')
  async getOneBook(@Param() id) {
    return await this.booksService.OneBook(id);
  }

  @Post('/addBook')
  async createBook(@Body() book) {
    await this.booksService.createBook(book);
    return {
      msg: 'Book inserted succesfuly!',
    };
  }

  @Put('/updateBook/:id')
  async updateBook(@Param() id, @Body() book) {
    await this.booksService.updateBook(id, book);
    return {
      msg: 'Book updated succesfuly!',
    };
  }

  @Delete('/deleteBook/:id')
  async deleteBook(@Param() id) {
    await this.booksService.deleteBook(id);
    return {
      msg: 'Book deleted!',
    };
  }
}

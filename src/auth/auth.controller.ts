import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('/register')
  async register(@Body() user) {
    return await this.AuthService.register(user);
  }

  @Post('/login')
  async login(@Body() user, @Res() res: Response) {
    const result = await this.AuthService.login(user);
    const token = result.token;
    res.cookie('token', token);
    res.send('login successfull!');
  }
}

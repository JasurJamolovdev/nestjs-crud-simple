import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repo';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private AuthRepository: AuthRepository,
    private jwtService: JwtService, ) {}

  async register(user) {
    const hashPSW = await bcrypt.hash(user.user_password, 12);
    user.user_password = hashPSW;
    await this.AuthRepository.register(user);
  }

  async login(user) {
    let result = await this.AuthRepository.login(user);
    result = result[0];
    if (result.length === 0) {
      console.log('User not found!');
    } else {
      const cPsw = await bcrypt.compare(
        user.user_password,
        result.user_password,
      );
      if (!cPsw) {
        console.log('Password incorrect!');
      } else {
        const token = this.jwtService.sign({ user_id: result.user_id });

        return {
          token: token,
        };
      }
    }
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import * as consts from 'src/common/constants/error.constants';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthInput } from './dto/auth.input';
import { TokenValidType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthInput): Promise<{ token: string; user: User }> {
    const { email, password } = data;

    const user = await this.usersService.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException(consts.AUTH_LOGIN_ERROR);
    }

    if (!user.password) {
      throw new UnauthorizedException(consts.USER_PASS_EMPTY);
    }

    const isValidPassword = compareSync(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException(consts.INVALID_PASSWORD);
    }

    delete user.password;

    const token = await this.jwtToken(user);
    return { token, user };
  }

  async validateToken(token: string): Promise<TokenValidType> {
    const jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
    });
    try {
      jwtService.verify(token);
      const tokenContent = jwtService.decode(token);
      const user: User = await this.usersService.findOne({
        where: { id: tokenContent.sub },
      });
      if (user) {
        return { valid: true };
      }
      return { valid: false };
    } catch (error) {
      return { valid: false };
    }
  }


  private async jwtToken(
    user: User,
    options?: JwtSignOptions,
  ): Promise<string> {
    const payload = { username: user.email, sub: user.id };
    return this.jwtService.sign(payload, options);
  }
}

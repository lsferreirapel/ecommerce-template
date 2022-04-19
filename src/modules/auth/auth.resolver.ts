import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';
import { UserDTO } from '../users/dto/user.dto';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import { AuthType, TokenValidType } from './dto/auth.type';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthType)
  public async login(@Args('data') data: AuthInput): Promise<AuthType> {
    const response = await this.authService.validateUser(data);
    return response;
  }

  @Query(() => TokenValidType)
  public async isTokenValid(
    @Args({ name: 'token', type: () => String })
    token: string,
  ): Promise<TokenValidType> {
    return await this.authService.validateToken(token);
  }

  @Query(() => UserDTO)
  @Roles('ANY')
  public async me(@CurrentUser() user: User): Promise<UserDTO> {
    return user;
  }
}

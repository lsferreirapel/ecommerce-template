import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
}

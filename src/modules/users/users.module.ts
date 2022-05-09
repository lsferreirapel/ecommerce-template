import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      services: [UsersService],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: User,
          CreateDTOClass: CreateUserInput,
          UpdateDTOClass: UpdateUserInput,
          ServiceClass: UsersService,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          decorators: [Roles(RolesEnum.SUPER_ADMIN)],
          create: {
            many: { disabled: true },
          },
          update: {
            many: { disabled: true },
          },
        },
      ],
    }),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

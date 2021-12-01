import {
  NestjsQueryGraphQLModule,
  PagingStrategies
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { CreateRoleInput } from './dto/create-role.input';
import { RoleDTO } from './dto/role.dto';
import { Role } from './entities/role.entity';
import { RolesService } from './roles.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Role])],
      services: [RolesService],
      resolvers: [
        {
          DTOClass: RoleDTO,
          EntityClass: Role,
          CreateDTOClass: CreateRoleInput,
          ServiceClass: RolesService,
          pagingStrategy: PagingStrategies.NONE,
          decorators: [Roles(RolesEnum.SUPER_ADMIN)],
          read: {
            pagingStrategy: PagingStrategies.NONE,
          },
          update: {
            one: { disabled: true },
            many: { disabled: true }
          }
        },
      ],
    }),
  ],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}

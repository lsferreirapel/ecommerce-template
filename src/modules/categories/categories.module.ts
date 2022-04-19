import {
  NestjsQueryGraphQLModule,
  PagingStrategies
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { CategoryDTO } from './dto/category.dto';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Category])],
      resolvers: [
        {
          DTOClass: CategoryDTO,
          EntityClass: Category,
          CreateDTOClass: CreateCategoryInput,
          UpdateDTOClass: UpdateCategoryInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          decorators: [Roles(RolesEnum.ADMIN, RolesEnum.SUPER_ADMIN)],
          create: {
            many: { disabled: true }
          },
          update: {
            many: { disabled: true }
          }
        },
      ],
    }),
  ],
  providers: [],
})
export class CategoriesModule {}

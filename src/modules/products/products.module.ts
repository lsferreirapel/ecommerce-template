import {
  NestjsQueryGraphQLModule,
  PagingStrategies
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { CreateProductInput } from './dto/create-product.input';
import { ProductDTO } from './dto/product.dto';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Product])],
      resolvers: [
        {
          DTOClass: ProductDTO,
          EntityClass: Product,
          CreateDTOClass: CreateProductInput,
          UpdateDTOClass: UpdateProductInput,
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
export class ProductsModule {}

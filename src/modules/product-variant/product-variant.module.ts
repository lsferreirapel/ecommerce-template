import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { CreateProductVariantInput } from './dto/create-product-variant.input';
import { ProductVariantDTO } from './dto/product-variant.dto';
import { UpdateProductVariantInput } from './dto/update-product-variant.input';
import { ProductVariant } from './entities/product-variant.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductVariant])],
      resolvers: [
        {
          DTOClass: ProductVariantDTO,
          EntityClass: ProductVariant,
          CreateDTOClass: CreateProductVariantInput,
          UpdateDTOClass: UpdateProductVariantInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          decorators: [Roles(RolesEnum.ADMIN, RolesEnum.SUPER_ADMIN)],
          update: {
            many: { disabled: true },
          },
        },
      ],
    }),
  ],
  providers: [],
})
export class ProductVariantModule {}

import { Module } from '@nestjs/common';
import { ProductVariant } from './entities/product-variant.entity';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { CreateProductVariantInput } from './dto/create-product-variant.input';
import { ProductVariantDTO } from './dto/product-variant.dto';
import { UpdateProductVariantInput } from './dto/update-product-variant.input';

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
        },
      ],
    }),
  ],
  providers: [],
})
export class ProductVariantModule {}

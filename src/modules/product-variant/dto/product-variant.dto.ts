import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ColorDTO } from 'src/modules/colors/dto/color.dto';
import { ProductDTO } from 'src/modules/products/dto/product.dto';

@ObjectType('ProductVariant')
@FilterableRelation('color', () => ColorDTO)
@FilterableRelation('product', () => ProductDTO)
export class ProductVariantDTO extends BaseDTO {
  @FilterableField()
  price: number;
}

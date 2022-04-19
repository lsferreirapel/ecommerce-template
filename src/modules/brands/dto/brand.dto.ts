import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ProductDTO } from 'src/modules/products/dto/product.dto';

@ObjectType('Brand')
@FilterableOffsetConnection('products', () => ProductDTO, { nullable: true })
export class BrandDTO extends BaseDTO {
  @FilterableField()
  name: string;
}

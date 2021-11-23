import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ProductVariantDTO } from 'src/modules/product-variant/dto/product-variant.dto';

@ObjectType('Color')
@FilterableOffsetConnection('productVariants', () => ProductVariantDTO, {
  nullable: true,
})
export class ColorDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  HEX: string;
}

import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenderEnum } from 'src/common/enums/gender.enum';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { CategoryDTO } from 'src/modules/categories/dto/category.dto';
import { ProductVariantDTO } from 'src/modules/product-variant/dto/product-variant.dto';

@ObjectType('Product')
@FilterableOffsetConnection('categories', () => CategoryDTO, { nullable: true })
@FilterableOffsetConnection('productVariants', () => ProductVariantDTO, {
  nullable: true,
})
export class ProductDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField({ nullable: true })
  code?: string;

  @FilterableField(() => GenderEnum)
  gender: GenderEnum;
}

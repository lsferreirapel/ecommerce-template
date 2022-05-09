import {
  FilterableField,
  FilterableOffsetConnection,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenderEnum } from 'src/common/enums/gender.enum';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { BrandDTO } from 'src/modules/brands/dto/brand.dto';
import { CategoryDTO } from 'src/modules/categories/dto/category.dto';
import { ProductVariantDTO } from 'src/modules/product-variant/dto/product-variant.dto';

@ObjectType('Product')
@FilterableOffsetConnection('categories', () => CategoryDTO, { nullable: true })
@FilterableOffsetConnection('productVariants', () => ProductVariantDTO, {
  nullable: true,
})
@FilterableRelation('brand', () => BrandDTO)
export class ProductDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField(() => GenderEnum)
  gender: GenderEnum;
}

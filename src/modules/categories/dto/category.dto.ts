import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenderEnum } from 'src/common/enums/gender.enum';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ProductDTO } from 'src/modules/products/dto/product.dto';

@ObjectType('Category')
@FilterableOffsetConnection('products', () => ProductDTO, { nullable: true })
export class CategoryDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField(() => GenderEnum)
  gender: GenderEnum;
}

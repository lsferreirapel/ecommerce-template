import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Brand')
export class BrandDTO extends BaseDTO {
  @FilterableField()
  name: string;
}

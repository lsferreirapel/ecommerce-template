import { FilterableField } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('User')
export class UserDTO extends BaseDTO {
  @FilterableField()
  email: string;

  @FilterableField()
  name: string;
}

import { FilterableField } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @FilterableField(() => ID)
  id: string;

  @FilterableField()
  email: string;

  @FilterableField()
  name: string;
}

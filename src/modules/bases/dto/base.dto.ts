import { FilterableField } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @FilterableField(() => ID)
  id: string;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  updatedAt: Date;

  @FilterableField({ nullable: true })
  deletedAt?: Date;
}

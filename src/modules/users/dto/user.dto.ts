import {
  FilterableField,
  FilterableUnPagedRelation,
} from '@nestjs-query/query-graphql';
import { HideField, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { RoleDTO } from 'src/modules/roles/dto/role.dto';

@ObjectType('User')
@FilterableUnPagedRelation('roles', () => RoleDTO, { nullable: true })
export class UserDTO extends BaseDTO {
  @FilterableField()
  email!: string;

  @FilterableField()
  name!: string;

  @HideField()
  password?: string;
}

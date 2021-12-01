import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Role')
export class RoleDTO extends BaseDTO {
  @FilterableField(() => RolesEnum)
  name: RolesEnum;
}

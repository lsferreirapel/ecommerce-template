import { Field, InputType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { RolesEnum } from 'src/common/enums/roles.enum';

@InputType()
export class CreateRoleInput {
  @IsEnum(RolesEnum)
  @Field(() => RolesEnum)
  name: RolesEnum;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateRoleInput } from 'src/modules/roles/dto/create-role.input';

@InputType()
export class CreateUserInput {
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  password?: string;

  @IsNotEmpty()
  @Field(() => [CreateRoleInput])
  roles?: CreateRoleInput[];
}

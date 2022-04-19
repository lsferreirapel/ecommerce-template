import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateBrandInput {
  @IsString()
  @Field()
  name: string;
}

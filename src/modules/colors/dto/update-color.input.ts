import { CreateColorInput } from './create-color.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateColorInput extends PartialType(CreateColorInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}

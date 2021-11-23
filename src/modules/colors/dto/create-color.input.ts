import { InputType, Field } from '@nestjs/graphql';
import { IsHexColor, IsString } from 'class-validator';

@InputType()
export class CreateColorInput {
  @IsString()
  @Field()
  name: string;

  @IsHexColor()
  @Field()
  HEX: string;
}

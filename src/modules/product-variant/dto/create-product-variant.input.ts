import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';

@InputType()
export class CreateProductVariantInput {
  @IsNumber()
  @IsPositive()
  @Field()
  price: number;
}

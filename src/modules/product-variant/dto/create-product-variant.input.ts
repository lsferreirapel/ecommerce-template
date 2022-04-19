import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';
import { UpdateColorInput } from 'src/modules/colors/dto/update-color.input';
import { UpdateProductInput } from 'src/modules/products/dto/update-product.input';

@InputType()
export class CreateProductVariantInput {
  @IsNumber()
  @IsPositive()
  @Field()
  price: number;

  @Field(() => UpdateProductInput)
  product: UpdateProductInput;

  @Field(() => UpdateColorInput)
  color: UpdateColorInput;
}

import { CreateProductVariantInput } from './create-product-variant.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductVariantInput extends PartialType(
  CreateProductVariantInput,
) {}

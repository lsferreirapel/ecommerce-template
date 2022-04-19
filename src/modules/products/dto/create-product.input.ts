import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsString } from 'class-validator';
import { GenderEnum } from 'src/common/enums/gender.enum';
// import { UpdateCategoryInput } from 'src/modules/categories/dto/update-category.input';
// import { UpdateProductVariantInput } from 'src/modules/product-variant/dto/update-product-variant.input';

@InputType()
export class CreateProductInput {
  @IsString()
  @Field()
  name: string;

  @IsEnum(GenderEnum)
  @Field()
  gender: GenderEnum;

  // @Field(() => UpdateProductVariantInput, { nullable: true })
  // productVariants?: UpdateProductVariantInput[];

  // @Field(() => UpdateCategoryInput, { nullable: true })
  // categories?: UpdateCategoryInput[];
}

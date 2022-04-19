import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsString } from 'class-validator';
import { GenderEnum } from 'src/common/enums/gender.enum';

@InputType()
export class CreateCategoryInput {
  @IsString()
  @Field()
  name: string;

  @IsEnum(GenderEnum)
  @Field()
  gender: GenderEnum;
}

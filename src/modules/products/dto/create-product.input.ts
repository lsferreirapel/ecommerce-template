import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';
import { GenderEnum } from 'src/common/enums/gender.enum';

@InputType()
export class CreateProductInput {
  @IsString()
  @Field()
  name: string;

  @IsEnum(GenderEnum)
  @Field()
  gender: GenderEnum;
}

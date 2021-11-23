import { CreateColorInput } from './create-color.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateColorInput extends PartialType(CreateColorInput) {}

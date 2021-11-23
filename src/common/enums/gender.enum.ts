import { registerEnumType } from '@nestjs/graphql';

export enum GenderEnum {
  'MALE' = 'MALE',
  'FEMALE' = 'FEMALE',
  'NO_GENDER' = 'NO_GENDER',
}

registerEnumType(GenderEnum, {
  name: 'GenderEnum',
});

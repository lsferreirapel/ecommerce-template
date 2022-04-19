import { registerEnumType } from '@nestjs/graphql';

export enum RolesEnum {
  'SUPER_ADMIN' = 'SUPER_ADMIN',
  'ADMIN' = 'ADMIN',
  'USER' = 'USER',
}

registerEnumType(RolesEnum, {
  name: 'RolesEnum',
});

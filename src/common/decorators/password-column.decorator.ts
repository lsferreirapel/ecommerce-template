/* eslint-disable @typescript-eslint/ban-types */
import { ColumnOptions, getMetadataArgsStorage } from 'typeorm';
import { ColumnMetadataArgs } from 'typeorm/metadata-args/ColumnMetadataArgs';
import { hashSync } from 'bcryptjs';

export function PasswordColumn(options?: ColumnOptions): Function {
  if (!options) options = {} as ColumnOptions;

  options.type = 'varchar';
  options.transformer = {
    to(password: string): string {
      if (password) {
        const SALT_FACTOR = 10;
        const hash = hashSync(password, SALT_FACTOR);
        return hash;
      }
    },
    from(hash: string): string {
      if (hash) return hash;
    },
  };

  return function (object: Object, propertyName: string) {
    getMetadataArgsStorage().columns.push({
      target: object.constructor,
      propertyName: propertyName,
      mode: 'regular',
      options: options || {},
    } as ColumnMetadataArgs);
  };
}

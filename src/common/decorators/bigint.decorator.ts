/* eslint-disable @typescript-eslint/ban-types */
import { ColumnOptions, getMetadataArgsStorage } from 'typeorm';
import { ColumnMetadataArgs } from 'typeorm/metadata-args/ColumnMetadataArgs';

export function BigIntColumn(options?: ColumnOptions): Function {
  if (!options) options = {} as ColumnOptions;

  options.type = 'bigint';
  options.transformer = {
    from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
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

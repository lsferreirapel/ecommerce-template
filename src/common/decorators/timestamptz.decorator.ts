/* eslint-disable @typescript-eslint/ban-types */
import { ColumnOptions, getMetadataArgsStorage } from 'typeorm';
import { ColumnMetadataArgs } from 'typeorm/metadata-args/ColumnMetadataArgs';

export function TimestampTZColumn(options?: ColumnOptions): Function {
  if (!options) options = {} as ColumnOptions;

  options.type = 'varchar';
  options.transformer = {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
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

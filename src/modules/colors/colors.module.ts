import { Module } from '@nestjs/common';
import { Color } from './entities/color.entity';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ColorDTO } from './dto/color.dto';
import { CreateColorInput } from './dto/create-color.input';
import { UpdateColorInput } from './dto/update-color.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Color])],
      resolvers: [
        {
          DTOClass: ColorDTO,
          EntityClass: Color,
          CreateDTOClass: CreateColorInput,
          UpdateDTOClass: UpdateColorInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ColorsModule {}

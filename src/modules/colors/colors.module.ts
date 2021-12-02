import {
  NestjsQueryGraphQLModule,
  PagingStrategies
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { ColorDTO } from './dto/color.dto';
import { CreateColorInput } from './dto/create-color.input';
import { UpdateColorInput } from './dto/update-color.input';
import { Color } from './entities/color.entity';

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
          decorators: [Roles(RolesEnum.ADMIN, RolesEnum.SUPER_ADMIN)],
          create: {
            many: { disabled: true }
          },
          update: {
            many: { disabled: true }
          }
        },
      ],
    }),
  ],
  providers: [],
})
export class ColorsModule {}

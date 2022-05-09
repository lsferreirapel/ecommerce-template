import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Roles } from 'src/common/decorators/auth.roles.decorator';
import { RolesEnum } from 'src/common/enums/roles.enum';
import { BrandDTO } from './dto/brand.dto';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { Brand } from './entities/brand.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Brand])],
      resolvers: [
        {
          DTOClass: BrandDTO,
          EntityClass: Brand,
          CreateDTOClass: CreateBrandInput,
          UpdateDTOClass: UpdateBrandInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          decorators: [Roles(RolesEnum.ADMIN, RolesEnum.SUPER_ADMIN)],
          create: {
            many: { disabled: true },
          },
          update: {
            many: { disabled: true },
          },
        },
      ],
    }),
  ],
  providers: [],
})
export class BrandsModule {}

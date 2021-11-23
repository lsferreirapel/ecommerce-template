import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { BrandsModule } from './modules/brands/brands.module';
import { ColorsModule } from './modules/colors/colors.module';
import { ProductVariantModule } from './modules/product-variant/product-variant.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(),
    UsersModule,
    ProductsModule,
    CategoriesModule,
    BrandsModule,
    ColorsModule,
    ProductVariantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

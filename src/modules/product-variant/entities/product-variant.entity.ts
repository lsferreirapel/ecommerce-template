import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Color } from 'src/modules/colors/entities/color.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class ProductVariant extends BaseEntity {
  @Column('float')
  price: number;

  @ManyToOne(() => Color, (color) => color.productVariants, {
    cascade: true,
    eager: true,
  })
  color: Color;

  @ManyToOne(() => Product, (product) => product.productVariants)
  product: Product;
}

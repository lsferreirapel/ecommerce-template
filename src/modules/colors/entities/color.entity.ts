import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { ProductVariant } from 'src/modules/product-variant/entities/product-variant.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Color extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  HEX: string;

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.color)
  productVariants: ProductVariant[];
}

import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Brand extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.brand, { nullable: true })
  products: Product[];
}

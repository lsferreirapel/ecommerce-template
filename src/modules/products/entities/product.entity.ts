import { GenderEnum } from 'src/common/enums/gender.enum';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Category } from 'src/modules/categories/entities/category.entity';
import { ProductVariant } from 'src/modules/product-variant/entities/product-variant.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column({ unique: true, nullable: true })
  code?: string;

  @Column({ name: 'gender', type: 'enum', enum: GenderEnum })
  gender: GenderEnum;

  @ManyToMany(() => Category, { nullable: true, cascade: true, eager: true })
  @JoinTable()
  categories?: Category[];

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.product, {
    nullable: true,
    cascade: true,
  })
  productVariants?: ProductVariant[];
}

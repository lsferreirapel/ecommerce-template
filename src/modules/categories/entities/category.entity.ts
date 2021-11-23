import { GenderEnum } from 'src/common/enums/gender.enum';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column({ name: 'gender', type: 'enum', enum: GenderEnum })
  gender: GenderEnum;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}

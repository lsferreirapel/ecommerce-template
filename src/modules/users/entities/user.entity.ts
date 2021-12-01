import { PasswordColumn } from 'src/common/decorators/password-column.decorator';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @PasswordColumn({ nullable: true })
  password?: string;

  @ManyToMany(() => Role, (role) => role.users, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  roles?: Role[];
}

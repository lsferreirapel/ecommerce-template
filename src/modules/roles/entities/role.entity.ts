import { RolesEnum } from 'src/common/enums/roles.enum';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Role extends BaseEntity {
  @Column()
  name: RolesEnum;

  @ManyToMany(() => User, (user) => user.roles, { nullable: true })
  @JoinTable()
  users?: User[];
}

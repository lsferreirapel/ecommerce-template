import { RolesEnum } from 'src/common/enums/roles.enum';
import { Role } from 'src/modules/roles/entities/role.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

const users = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin123',
  },
];

export class SeedAdmin1607716005977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      users.map(async (user) => {
        const UserRepo = queryRunner.connection.getRepository(User);

        const admin = UserRepo.create({
          name: user.name,
          email: user.email,
          password: user.password,
        });
        const RoleRepo = queryRunner.connection.getRepository(Role);
        admin.roles = await RoleRepo.find({ name: RolesEnum.SUPER_ADMIN });
        await UserRepo.save(admin);
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const UserRepo = queryRunner.connection.getRepository(User);
    users.forEach(async (user) => {
      await UserRepo.delete({ email: user.email });
    });
  }
}

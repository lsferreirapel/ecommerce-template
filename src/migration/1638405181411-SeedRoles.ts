import { RolesEnum } from 'src/common/enums/roles.enum';
import { Role } from 'src/modules/roles/entities/role.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

const ROLES = Object.values(RolesEnum);

export class SeedRoles1607709416292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const RoleRepo = queryRunner.connection.getRepository(Role);
    await RoleRepo.save(ROLES.map((role) => ({ name: role })));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const RoleRepo = queryRunner.connection.getRepository(Role);
    const roles = await RoleRepo.find({
      where: ROLES.map((role) => ({ name: role })),
    });
    RoleRepo.remove(roles);
  }
}

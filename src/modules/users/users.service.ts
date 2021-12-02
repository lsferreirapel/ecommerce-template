import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import * as consts from 'src/common/constants/error.constants';
import { FindOneOptions, Repository } from 'typeorm';

import { BaseInputWhere } from './../bases/base.input';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends TypeOrmQueryService<User> {
  constructor(
    @InjectRepository(User)
    public userRepository: Repository<User>, // public rolesService: RolesService,
  ) {
    super(userRepository, { useSoftDelete: true });
  }

  async findOne(input: BaseInputWhere & FindOneOptions<User>): Promise<User> {
    const data = await this.userRepository.findOne({ ...input });
    if (!data) {
      throw new NotFoundException(consts.USER_NOT_FOUND);
    }
    return data;
  }
}

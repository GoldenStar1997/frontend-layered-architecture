import { Inject, Injectable } from 'containers/core';
import { AuthRepoType } from 'data-access/auth';
import { AuthService } from './auth.service';
import { AuthToken } from '../entities/auth-token.entity';
import { AuthRepository } from '../repository/auth.repo';

@Injectable()
export class AuthServiceImpl implements AuthService {
  constructor(@Inject(AuthRepoType) private readonly _authRepo: AuthRepository) {}

  login(login: string, password: string): Promise<AuthToken> {
    return this._authRepo.login(login, password);
  }
}
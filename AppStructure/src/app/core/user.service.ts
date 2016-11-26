import { IUserService } from './definitions/user.service';
import { Injectable, Optional } from '@angular/core';
import {UserServiceConfig} from './user-service-config'

let nextId = 1;

@Injectable()
export class UserService implements IUserService {
  private _userName = 'Jaimito Hernandez';
  id = nextId++;

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
   }

  get userName():string {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }
}

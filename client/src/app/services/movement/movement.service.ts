import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { BaseService } from '../base.service';
import { Movement } from '../../model';
import { Observable } from 'rxjs';

@Injectable()
export abstract class MovementService extends BaseService<Movement> {
  //TODO: search movements by name
}

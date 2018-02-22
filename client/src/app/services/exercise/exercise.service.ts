import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user/user.service'
import { BaseService } from '../base.service';
import { Exercise } from '../../model';

@Injectable()
export abstract class ExerciseService extends BaseService<Exercise> {

}

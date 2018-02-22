import { Injectable } from '@angular/core';
import { WorkoutLoader } from './workout.loader';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Workout, User, Role } from '../../model';
import { UserService } from '../user';
import { BaseService } from '../base.service';

@Injectable()
export abstract class WorkoutService extends BaseService<Workout> {

}

import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Program } from '../../model';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable()
export abstract class ProgramService extends BaseService<Program> {

}
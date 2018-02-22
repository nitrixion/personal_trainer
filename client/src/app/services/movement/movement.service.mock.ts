import { Injectable } from '@angular/core';
import { MovementService } from './movement.service';
import { Observable } from 'rxjs';
import { Movement } from '../../model';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MovementServiceMock extends MovementService {
    movement: Movement;
    constructor() {
        super();
        this.movement = new Movement();
    }
    getById(id: any): Observable<{}> {
        return of(this.movement);
    }
    getAll(): Observable<{}[]> {
        return of([this.movement]);
    }
    save(program: any): Promise<string> {
        throw new Error("Method not implemented.");
        // return new Promise<string>((resolve,reject) => {
        //     resolve("uid-123");
        // });
    }
    update(program: any): Promise<string> {
        throw new Error("Method not implemented.");
        // return new Promise<string>((resolve,reject) => {
        //     resolve("uid-123");
        // });
    }
}
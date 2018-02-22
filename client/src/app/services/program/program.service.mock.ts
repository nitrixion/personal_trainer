import { Injectable } from '@angular/core';
import { ProgramService } from './program.service';
import { Observable } from 'rxjs';
import { Program } from '../../model';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProgramServiceMock extends ProgramService {
    program: Program;
    constructor() {
        super();
        this.program = new Program();
    }
    getById(id: any): Observable<{}> {
        return of(this.program);
    }
    getAll(): Observable<{}[]> {
        return of([this.program]);
    }
    save(program: any): Promise<string> {
        return new Promise<string>((resolve,reject) => {
            resolve("uid-123");
        });
    }
    update(program: any): Promise<string> {
        return new Promise<string>((resolve,reject) => {
            resolve("uid-123");
        });
    }
}
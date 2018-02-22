import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export abstract class BaseService<T> {
    abstract getById(id) : Observable<{}>;
  
    abstract getAll() : Observable<{}[]>;
  
    abstract save(item:T) : Promise<string>;
  
    abstract update(item:T) : Promise<string>;
  }
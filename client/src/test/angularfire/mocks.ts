import { of } from "rxjs/observable/of";

export class AngularFireAuthMock {
    public signInWithEmailAndPassword(username,password) {
        return new Promise<any>((resolve,reject) => {
            resolve({uid:"uid"});
        });
    }
}

export class AngularFireDatabaseMock {
    public object(query){
        return new AngularFireObjectMock();
    }
}

export class AngularFireObjectMock {
    public valueChanges() {
        return of({});
    }
    public update() {
        return new Promise<void>((resolve,reject) => {
            resolve();
        });
    }
}
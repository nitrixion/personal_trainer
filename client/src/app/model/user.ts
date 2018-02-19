export class User {
    public id: string;
    public username: string;
    public role: Role;
    public uid: string;
}

export enum Role{
    trainer = 0,
    trainee,
    admin
}

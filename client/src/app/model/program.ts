import { User, Workout } from ".";

export class Program {
    public name: string;
    public start: Date;
    public end: Date;
    public owner: User;
    public trainee: User;
    public notes: string;
    public workouts: Workout[];
}

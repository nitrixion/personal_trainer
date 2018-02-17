import { User, Exercise } from ".";

export class Workout {
    public id: string;
    public name: string;
    public exercises: Exercise[];
    public notes: string;
    public owner: User;
    public isPublic: boolean;
}

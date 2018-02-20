import { Exercise } from ".";
import { User } from "@firebase/auth-types";

export class Workout {
    public id: string;
    public name: string;
    public exerciseIds: string[];
    public notes: string;
    public ownerId: string;
    public isPublic: boolean;
}



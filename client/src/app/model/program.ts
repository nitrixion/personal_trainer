import { User } from "./user";
import { Workout } from "./workout";
import { ExerciseBase } from "./exercise";
import { WorkoutPerformance } from "./performance";

/// Use a deep model for performances instead of Id refs 
/// as each program and the associated performances are
/// single use but may be copied
export class Program {
    public id: string;
    public name: string;
    public start: Date;
    public startString: string;
    public end: Date;
    public endString: string;
    public ownerId: string;
    public traineeId: string;
    public notes: string;
    public workoutIds: string[];
    public performance: WorkoutPerformance[];
}


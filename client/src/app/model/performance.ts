import { ExerciseBase } from "./exercise";
import { Workout } from "./workout";

export class WorkoutPerformance {
    public id: string;
    public workoutId: string;
    public performances: ExercisePerformance[];
}

export class ExercisePerformance extends ExerciseBase {
    public exerciseId: string;
}
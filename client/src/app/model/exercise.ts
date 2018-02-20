import { RepType, WeightType } from "./enums";

export abstract class ExerciseBase {
    public id: string;
    public reps: number;
    public sets: number;
    public weight: number;
    public notes: string;
}

// Exercise represents a structure set of movements
export class Exercise extends ExerciseBase{
    public movements: string[];
    public restSeconds: number;
    public repsMin: number;
    public repType: RepType;
    public weightType: WeightType;

    public getName() {
        if(this.movements && this.movements.length > 0){
            return this.movements.join(" SS ");
        }
    }
}

export class Exercise {
    public id: string;
    public movements: string[];
    public restSeconds: number;
    public reps: number;
    public repsMin: number;
    public repType: RepType;
    public sets: number;
    public weight: number;
    public weightType: WeightType;
    public notes: string;
}

/// Bench Press
/// Squat
export class Movement {
    public id: string;
    public name: string;
}

export enum WeightType {
    lbs = 0,
    kg = 1,
    RM = 10, // percentage of 1 rep max
    Heavy = 20
}

export enum RepType {
    Reps,
    Seconds
}
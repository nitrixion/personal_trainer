export class Exercise {
    public id: string;
    public movements: Movement[];
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
    lbs,
    kg,
    RM, // percentage of 1 rep max
    Heavy
}

export enum RepType {
    Reps,
    Seconds
}
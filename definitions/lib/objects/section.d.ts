import { Checkpoint } from './checkpoint';
import { Journey } from './journey';
export declare class Section {
    private _journey;
    private _walk;
    private _departure;
    private _arrival;
    readonly journey: Journey;
    readonly walk: string;
    readonly departure: Checkpoint;
    readonly arrival: Checkpoint;
}

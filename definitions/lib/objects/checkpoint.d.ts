import { Location } from './location';
import { Prognosis } from './prognosis';
export declare class Checkpoint {
    private _station;
    private _arrival;
    private _departure;
    private _delay;
    private _platform;
    private _prognosis;
    readonly station: Location;
    readonly arrival: Date;
    readonly departure: Date;
    readonly delay: number;
    readonly platform: string;
    readonly prognosis: Prognosis;
}

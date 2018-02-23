import { Location } from './location';
import { Prognosis } from './prognosis';
export declare class Checkpoint {
    private _station;
    private _arrival;
    private _arrivalTimestamp;
    private _departure;
    private _departureTimestamp;
    private _delay;
    private _platform;
    private _prognosis;
    readonly station: Location;
    readonly arrival: string;
    readonly arrivalTimestamp: number;
    readonly departure: string;
    readonly departureTimestamp: number;
    readonly delay: number;
    readonly platform: string;
    readonly prognosis: Prognosis;
}

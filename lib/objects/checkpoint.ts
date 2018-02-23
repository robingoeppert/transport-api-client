import {Location} from './location';
import {Prognosis} from './prognosis';


export class Checkpoint {
    private _station: Location;
    private _arrival: string;
    private _arrivalTimestamp: number;
    private _departure: string;
    private _departureTimestamp: number;
    private _delay: number;
    private _platform: string;
    private _prognosis: Prognosis;


    get station(): Location {
        return this._station;
    }

    get arrival(): string {
        return this._arrival;
    }

    get arrivalTimestamp(): number {
        return this._arrivalTimestamp;
    }

    get departure(): string {
        return this._departure;
    }

    get departureTimestamp(): number {
        return this._departureTimestamp;
    }

    get delay(): number {
        return this._delay;
    }

    get platform(): string {
        return this._platform;
    }

    get prognosis(): Prognosis {
        return this._prognosis;
    }
}

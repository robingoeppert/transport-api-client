import {Location} from './location';
import {Prognosis} from './prognosis';


export class Checkpoint {
    private _station: Location;
    private _arrival: Date;
    private _departure: Date;
    private _delay: number;
    private _platform: string;
    private _prognosis: Prognosis;


    get station(): Location {
        return this._station;
    }

    get arrival(): Date {
        return this._arrival;
    }

    get departure(): Date {
        return this._departure;
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
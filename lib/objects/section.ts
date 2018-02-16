import {Checkpoint} from './checkpoint';
import {Journey} from './journey';


export class Section {
    private _journey: Journey;
    private _walk: string;
    private _departure: Checkpoint;
    private _arrival: Checkpoint;


    get journey(): Journey {
        return this._journey;
    }

    get walk(): string {
        return this._walk;
    }

    get departure(): Checkpoint {
        return this._departure;
    }

    get arrival(): Checkpoint {
        return this._arrival;
    }
}
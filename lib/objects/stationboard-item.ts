import {Journey} from './journey';
import {Checkpoint} from './checkpoint';


export class StationboardItem extends Journey {
    private _stop: Checkpoint;
    private _subcategory: string;


    get stop(): Checkpoint {
        return this._stop;
    }

    get subcategory(): string {
        return this._subcategory;
    }
}

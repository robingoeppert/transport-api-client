import { Journey } from './journey';
import { Checkpoint } from './checkpoint';
export declare class StationboardItem extends Journey {
    private _stop;
    private _subcategory;
    readonly stop: Checkpoint;
    readonly subcategory: string;
}

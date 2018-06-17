import { Coordinate } from './coordinate';
export declare class Location {
    private _id;
    private _name;
    private _type;
    private _score;
    private _coordinate;
    private _distance;
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly score: number;
    readonly coordinate: Coordinate;
    readonly distance: number;
}

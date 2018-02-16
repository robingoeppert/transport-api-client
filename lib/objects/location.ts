import {Coordinate} from './coordinate';


export class Location {
    private _id: string;
    private _name: string;
    private _type: string;
    private _score: number;
    private _coordinate: Coordinate;
    private _distance: number;


    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get type(): string {
        return this._type;
    }

    get score(): number {
        return this._score;
    }

    get coordinate(): Coordinate {
        return this._coordinate;
    }

    get distance(): number {
        return this._distance;
    }
}
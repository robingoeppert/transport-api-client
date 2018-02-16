export class Coordinate {
    private _type: string;
    private _x: number;
    private _y: number;


    get type(): string {
        return this._type;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}
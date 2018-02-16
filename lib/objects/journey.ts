import {Checkpoint} from './checkpoint';


export class Journey {
    private _name: string;
    private _category: string;
    private _categoryCode: number;
    private _number: string;
    private _operator: string;
    private _to: string;
    private _passList: Array<Checkpoint>;
    private _capacity1st: number;
    private _capacity2nd: number;


    get name(): string {
        return this._name;
    }

    get category(): string {
        return this._category;
    }

    get categoryCode(): number {
        return this._categoryCode;
    }

    get number(): string {
        return this._number;
    }

    get operator(): string {
        return this._operator;
    }

    get to(): string {
        return this._to;
    }

    get passList(): Array<Checkpoint> {
        return this._passList;
    }

    get capacity1st(): number {
        return this._capacity1st;
    }

    get capacity2nd(): number {
        return this._capacity2nd;
    }
}
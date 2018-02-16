import { Checkpoint } from './checkpoint';
export declare class Journey {
    private _name;
    private _category;
    private _categoryCode;
    private _number;
    private _operator;
    private _to;
    private _passList;
    private _capacity1st;
    private _capacity2nd;
    readonly name: string;
    readonly category: string;
    readonly categoryCode: number;
    readonly number: string;
    readonly operator: string;
    readonly to: string;
    readonly passList: Array<Checkpoint>;
    readonly capacity1st: number;
    readonly capacity2nd: number;
}

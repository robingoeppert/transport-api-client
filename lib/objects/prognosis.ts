export class Prognosis {
    private _platform: string;
    private _departure: Date;
    private _arrival: Date;
    private _capacity1st: number;
    private _capacity2nd: number;


    get platform(): string {
        return this._platform;
    }

    get departure(): Date {
        return this._departure;
    }

    get arrival(): Date {
        return this._arrival;
    }

    get capacity1st(): number {
        return this._capacity1st;
    }

    get capacity2nd(): number {
        return this._capacity2nd;
    }
}
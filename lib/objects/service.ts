export class Service {
    private _regular: string;
    private _irregular: string;


    get regular(): string {
        return this._regular;
    }

    get irregular(): string {
        return this._irregular;
    }
}
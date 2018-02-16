import {Checkpoint} from './checkpoint';
import {Service} from './service';
import {Section} from './section';


export class Connection {
    private _from: Checkpoint;
    private _to: Checkpoint;
    private _duration: Date;
    private _service: Service;
    private _products: Array<string>;
    private _capacity1st: number;
    private _capacity2nd: number;
    private _sections: Array<Section>;


    get from(): Checkpoint {
        return this._from;
    }

    get to(): Checkpoint {
        return this._to;
    }

    get duration(): Date {
        return this._duration;
    }

    get service(): Service {
        return this._service;
    }

    get products(): Array<string> {
        return this._products;
    }

    get capacity1st(): number {
        return this._capacity1st;
    }

    get capacity2nd(): number {
        return this._capacity2nd;
    }

    get sections(): Array<Section> {
        return this._sections;
    }
}
import { Checkpoint } from './checkpoint';
import { Service } from './service';
import { Section } from './section';
export declare class Connection {
    private _from;
    private _to;
    private _duration;
    private _service;
    private _products;
    private _capacity1st;
    private _capacity2nd;
    private _sections;
    readonly from: Checkpoint;
    readonly to: Checkpoint;
    readonly duration: Date;
    readonly service: Service;
    readonly products: Array<string>;
    readonly capacity1st: number;
    readonly capacity2nd: number;
    readonly sections: Array<Section>;
}

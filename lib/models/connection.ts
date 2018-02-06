import {Checkpoint} from './checkpoint';
import {Service} from './service';
import {Section} from './section';

export class Connection {
    private from: Checkpoint;
    private to: Checkpoint;
    private duration: Date;
    private service: Service;
    private products: Array<string>;
    private capacity1st: number;
    private capacity2nd: number;
    private sections: Array<Section>;
}
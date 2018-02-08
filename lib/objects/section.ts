import {Checkpoint} from './checkpoint';
import {Journey} from './journey';

export class Section {
    private journey: Journey;
    private walk: string;
    private departure: Checkpoint;
    private arrival: Checkpoint;
}
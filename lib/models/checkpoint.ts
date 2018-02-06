import {Location} from './location';
import {Prognosis} from './prognosis';

export class Checkpoint {
    private station: Location;
    private arrival: Date;
    private departure: Date;
    private delay: number;
    private platform: string;
    private prognosis: Prognosis;
}
import {Checkpoint} from './checkpoint';

export class Journey {
    private name: string;
    private category: string;
    private categoryCode: number;
    private number: string;
    private operator: string;
    private to: string;
    private passList: Array<Checkpoint>;
    private capacity1st: number;
    private capacity2nd: number;
}
import {TransportApiRequest} from './transport-api-request';
import {TransportationType} from '../enums/transportation-type';
import {StationboardType} from '../enums/stationboard-type';
import * as WebRequest from 'web-request';
import {Location} from '../objects/location';
import {StationboardItem} from '../objects/stationboard-item';


export class StationboardRequest extends TransportApiRequest {

    private constructor() {
        super('stationboard');
    }


    public static byStationName(name: string): StationboardRequest {
        return new StationboardRequest()
            .addParam('station', name);
    }

    public static byStationId(id: string): StationboardRequest {
        return new StationboardRequest()
            .addParam('id', id);
    }


    /**
     * Limit responded departures/arrivals
     * @param {number} limit
     * @return {StationboardRequest} this request
     */
    public limitResponse(limit: number): StationboardRequest {
        return this.addParam('limit', String(limit));
    }

    /**
     * Get departures/arrivals of vehicles of specific type
     * @param {TransportationType} transportations
     * @return {StationboardRequest} this request
     */
    public withTransports(...transportations: TransportationType[]): StationboardRequest {
        for (let transportation of transportations) {
            this.addParam('transportations[]', transportation);
        }

        return this;
    }

    /**
     * Desired date and time of departure/arrival
     * @param {Date} date Date and Time
     * @return {StationboardRequest} this request
     */
    public atDateTime(date: Date): StationboardRequest {
        const month: string = this.numberToTwoDigitString(date.getMonth() + 1);
        const day: string = this.numberToTwoDigitString(date.getDate());
        const hours: string = this.numberToTwoDigitString(date.getHours());
        const minutes: string = this.numberToTwoDigitString(date.getMinutes());

        // Results in format yyyy-MM-dd hh:mm
        const dateString: string = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes;

        return this.addParam('datetime', dateString);
    }

    /**
     * Specifies if departures or arrivals get responded. Default is departure
     * @param {StationboardType} type
     * @return {StationboardRequest} this request
     */
    public ofType(type: StationboardType): StationboardRequest {
        return this.addParam('type', type);
    }


    send(): Promise<Array<StationboardItem>> {
        return WebRequest.json<StationboardResponse>(this.url)
            .then(value => {
                return value.stationboard;
            });
    }
}


interface StationboardResponse {
    station: Location;
    stationboard: Array<StationboardItem>;
}

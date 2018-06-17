import { TransportApiRequest } from './transport-api-request';
import { TransportationType } from '../enums/transportation-type';
import { StationboardType } from '../enums/stationboard-type';
import { StationboardItem } from '../objects/stationboard-item';
export declare class StationboardRequest extends TransportApiRequest {
    private constructor();
    /**
     * Creates new StationboardRequest for station found by name
     * @param {string} name station
     * @return {StationboardRequest} new request
     */
    static byStationName(name: string): StationboardRequest;
    /**
     * Creates new StationboardRequest for station found by id
     * @param {string} id station
     * @return {StationboardRequest} new request
     */
    static byStationId(id: string): StationboardRequest;
    /**
     * Limit responded departures/arrivals
     * @param {number} limit
     * @return {StationboardRequest} this request
     */
    limitResponse(limit: number): StationboardRequest;
    /**
     * Get departures/arrivals of vehicles of specific type
     * @param {TransportationType} transportations
     * @return {StationboardRequest} this request
     */
    withTransports(...transportations: TransportationType[]): StationboardRequest;
    /**
     * Desired date and time of departure/arrival
     * @param {Date} date Date and Time
     * @return {StationboardRequest} this request
     */
    atDateTime(date: Date): StationboardRequest;
    /**
     * Specifies if departures or arrivals get responded. Default is departure
     * @param {StationboardType} type
     * @return {StationboardRequest} this request
     */
    ofType(type: StationboardType): StationboardRequest;
    send(): Promise<Array<StationboardItem>>;
}

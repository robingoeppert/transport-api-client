import {TransportApiRequest} from './transport-api-request';
import {Connection} from '../objects/connection';
import {TransportationType} from '../enums/transportation-type';
import * as WebRequest from 'web-request';
import {AccessibilityType} from '../enums/accessibility-type';


export class ConnectionRequest extends TransportApiRequest {

    private constructor() {
        super('connections');
    }


    /**
     *
     * @param {string} from location name
     * @param {string} to location name
     * @return {ConnectionRequest} new request
     */
    public static byFromTo(from: string, to: string): ConnectionRequest {
        return new ConnectionRequest()
            .addParam('from', from)
            .addParam('to', to);
    }


    /**
     * Find connections via specific location
     * @param {string} viaLocations
     * @return {ConnectionRequest}
     */
    public via(...viaLocations: string[]): ConnectionRequest {
        for (let viaLocation of viaLocations) {
            this.addParam('via[]', viaLocation);
        }

        return this;
    }

    /**
     * Find connections at a particular date (time ignored)
     * @param {Date} date
     * @return {ConnectionRequest}
     */
    public onDate(date: Date): ConnectionRequest {
        const month: string = this.numberToTwoDigitString(date.getMonth() + 1);
        const day: string = this.numberToTwoDigitString(date.getDate());

        // Results in format yyyy-mm-dd
        const dateString: string = date.getFullYear() + '-' + month + '-' + day;

        return this.addParam('date', dateString);
    }

    /**
     * Find connections for a specific time (day date ignored)
     * @param {Date} time
     * @return {ConnectionRequest}
     */
    public atTime(time: Date): ConnectionRequest {
        const hours: string = this.numberToTwoDigitString(time.getHours());
        const minutes: string = this.numberToTwoDigitString(time.getMinutes());

        return this.addParam('time', hours + ':' + minutes);
    }

    /**
     * Specifies if requested date and time are on arrival (or departure). Default is false => departure
     * @param {boolean} isArrival
     * @return {ConnectionRequest}
     */
    public dateTimeIsArrival(isArrival: boolean): ConnectionRequest {
        return this.addParam('isArrivalTime', (isArrival ? '1' : '0'));
    }

    /**
     * Find connections with specific type(s) of transportation
     * @param {TransportationType} transportations
     * @return {ConnectionRequest}
     */
    public withTransports(...transportations: TransportationType[]): ConnectionRequest {
        for (let transportation of transportations) {
            this.addParam('transportations[]', transportation);
        }

        return this;
    }

    /**
     * Limit the responded connections
     * @param {number} limit
     * @return {ConnectionRequest}
     */
    public limitResponse(limit: number): ConnectionRequest {
        return this.addParam('limit', String(limit));
    }

    /**
     * Pagination of response. Page number is zero-based (param 0 is first page)
     * @param {number} page
     * @return {ConnectionRequest}
     */
    public pageOfResponse(page: number): ConnectionRequest {
        return this.addParam('page', String(page));
    }

    /**
     * If set to true, only direct connections get requested. Default is false
     * @param {boolean} isDirectConnection
     * @return {ConnectionRequest}
     */
    public onlyDirect(isDirectConnection: boolean): ConnectionRequest {
        return this.addParam('direct', (isDirectConnection ? '1' : '0'));
    }

    /**
     * If set to true, only night trains with beds get listed
     * @param {boolean} hasBeds
     * @return {ConnectionRequest}
     */
    public hasBeds(hasBeds: boolean): ConnectionRequest {
        return this.addParam('sleeper', (hasBeds? '1' : '0'));
    }

    /**
     * If set to true, only night trains with couchettes get listed
     * @param {boolean} hasCouchettes
     * @return {ConnectionRequest}
     */
    public hasCouchettes(hasCouchettes: boolean): ConnectionRequest {
        return this.addParam('couchette', (hasCouchettes ? '1' : '0'));
    }

    /**
     * If set to true, only trains allowing the transport of bicycles get listed
     * @param {boolean} allowed
     * @return {ConnectionRequest}
     */
    public bikesAllowed(allowed: boolean): ConnectionRequest {
        return this.addParam('bike', (allowed ? '1': '0'));
    }

    /**
     * Restrict response by accessibility of vehicle
     * @param {AccessibilityType} accessibility
     * @return {ConnectionRequest}
     */
    public accessibleBy(accessibility: AccessibilityType): ConnectionRequest {
        return this.addParam('accessibility', accessibility);
    }


    send(): Promise<Array<Connection>> {
        return WebRequest.json<ConnectionResponse>(this.url)
            .then(value => {
                return value.connections;
            });
    }
}


interface ConnectionResponse {
    connections: Array<Connection>;
}

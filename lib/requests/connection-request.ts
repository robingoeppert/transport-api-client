import {TransportApiRequest} from './transport-api-request';
import {Connection} from '../objects/connection';
import {TransportationType} from '../enums/transportation-type';
import * as WebRequest from 'web-request';
import {AccessibilityType} from '../enums/accessibility-type';


export class ConnectionRequest extends TransportApiRequest {

    private constructor() {
        super();
        this.url += 'connections';
    }


    /**
     *
     * @param {string} from location name
     * @param {string} to location name
     * @return {ConnectionRequest} new request
     */
    public static byFromTo(from: string, to: string): ConnectionRequest {
        const newRequest: ConnectionRequest = new ConnectionRequest();
        newRequest.url += '?from=' + encodeURIComponent(from) + '&to=' + encodeURIComponent(to);

        return newRequest;
    }


    /**
     * Find connections via specific location
     * @param {string} viaLocations
     * @return {ConnectionRequest}
     */
    public via(...viaLocations: string[]): ConnectionRequest {
        for (let viaLocation of viaLocations) {
            this.url += '&via[]=' + encodeURIComponent(viaLocation);
        }

        return this;
    }

    /**
     * Find connections at a particular date (time ignored)
     * @param {Date} date
     * @return {ConnectionRequest}
     */
    public onDate(date: Date): ConnectionRequest {
        let month: string = this.numberToTwoDigitString(date.getMonth());
        let day: string = this.numberToTwoDigitString(date.getDate());

        // Results in format yyyy-mm-dd
        let dateString: string = date.getFullYear() + '-' + month + '-' + day;
        this.url += '&date=' + encodeURIComponent(dateString);

        return this;
    }

    /**
     * Find connections for a specific time (day date ignored)
     * @param {Date} time
     * @return {ConnectionRequest}
     */
    public atTime(time: Date): ConnectionRequest {
        let hours: string = this.numberToTwoDigitString(time.getHours());
        let minutes: string = this.numberToTwoDigitString(time.getMinutes());

        this.url += '&time=' + hours + ':' + minutes;

        return this;
    }

    /**
     * Specifies if requested date and time are on arrival (or departure). Default is false => departure
     * @param {boolean} isArrival
     * @return {ConnectionRequest}
     */
    public timeIsArrival(isArrival: boolean): ConnectionRequest {
        this.url += '&isArrivalTime=' + (isArrival ? '1' : '0');

        return this;
    }

    /* TODO likly the same as in LocationRequest. Find an efficient solution */
    public withTransports(...transports: TransportationType[]): ConnectionRequest {
        return this;
    }

    /**
     * Limit the responded connections
     * @param {number} limit
     * @return {ConnectionRequest}
     */
    public limitResponse(limit: number): ConnectionRequest {
        this.url += '&limit=' + limit;

        return this;
    }

    /**
     * Pagination of response. Page number is zero-based (param 0 is first page)
     * @param {number} page
     * @return {ConnectionRequest}
     */
    public pageOfResponse(page: number): ConnectionRequest {
        this.url += '&page=' + page;

        return this;
    }

    /**
     * If set to true, only direct connections get requested. Default is false
     * @param {boolean} isDirectConnection
     * @return {ConnectionRequest}
     */
    public onlyDirect(isDirectConnection: boolean): ConnectionRequest {
        this.url += '&direct=' + (isDirectConnection ? '1' : '0');

        return this;
    }

    /**
     * If set to true, only night trains with beds get listed
     * @param {boolean} hasBeds
     * @return {ConnectionRequest}
     */
    public hasBeds(hasBeds: boolean): ConnectionRequest {
        this.url += '&sleeper=' + (hasBeds? '1' : '0');

        return this;
    }

    /**
     * If set to true, only night trains with couchettes get listed
     * @param {boolean} hasCouchettes
     * @return {ConnectionRequest}
     */
    public hasCouchettes(hasCouchettes: boolean): ConnectionRequest {
        this.url += '&couchette=' + (hasCouchettes ? '1' : '0');

        return this;
    }

    /**
     * If set to true, only trains allowing the transport of bicycles get listed
     * @param {boolean} allowed
     * @return {ConnectionRequest}
     */
    public bikesAllowed(allowed: boolean): ConnectionRequest {
        this.url += '&bike=' + (allowed ? '1': '0');

        return this;
    }

    /**
     * Restrict response by accessibility of vehicle
     * @param {AccessibilityType} accessibility
     * @return {ConnectionRequest}
     */
    public accessibleBy(accessibility: AccessibilityType): ConnectionRequest {
        this.url += '&accessibility=' + accessibility;

        return this;
    }


    send(): Promise<Array<Connection>> {
        return WebRequest.json<ConnectionResponse>(this.url)
            .then(value => {
                return value.connections;
            })
            .catch(reason => {
                return Promise.reject(reason);
            });
    }
}


interface ConnectionResponse {
    connections: Array<Connection>;
}

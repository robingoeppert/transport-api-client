import { TransportApiRequest } from './transport-api-request';
import { Connection } from '../objects/connection';
import { TransportationType } from '../enums/transportation-type';
import { AccessibilityType } from '../enums/accessibility-type';
export declare class ConnectionRequest extends TransportApiRequest {
    constructor(from: string, to: string);
    /**
     * Find connections via specific location
     * @param {string} viaLocations
     * @return {ConnectionRequest}
     */
    via(...viaLocations: string[]): ConnectionRequest;
    /**
     * Find connections at a particular date (time ignored)
     * @param {Date} date
     * @return {ConnectionRequest}
     */
    onDate(date: Date): ConnectionRequest;
    /**
     * Find connections for a specific time (day date ignored)
     * @param {Date} time
     * @return {ConnectionRequest}
     */
    atTime(time: Date): ConnectionRequest;
    /**
     * Specifies if requested date and time are on arrival (or departure). Default is false => departure
     * @param {boolean} isArrival
     * @return {ConnectionRequest}
     */
    withTimeIsArrival(isArrival: boolean): ConnectionRequest;
    withTransports(...transports: TransportationType[]): ConnectionRequest;
    /**
     * Limit the responded connections
     * @param {number} limit
     * @return {ConnectionRequest}
     */
    limitResponse(limit: number): ConnectionRequest;
    /**
     * Pagination of response. Page number is zero-based (param 0 is first page)
     * @param {number} page
     * @return {ConnectionRequest}
     */
    pageOfResponse(page: number): ConnectionRequest;
    /**
     * If set to true, only direct connections get requested. Default is false
     * @param {boolean} isDirectConnection
     * @return {ConnectionRequest}
     */
    onlyDirect(isDirectConnection: boolean): ConnectionRequest;
    /**
     * If set to true, only night trains with beds get listed
     * @param {boolean} hasBeds
     * @return {ConnectionRequest}
     */
    hasBeds(hasBeds: boolean): ConnectionRequest;
    /**
     * If set to true, only night trains with couchettes get listed
     * @param {boolean} hasCouchettes
     * @return {ConnectionRequest}
     */
    hasCouchettes(hasCouchettes: boolean): ConnectionRequest;
    /**
     * If set to true, only trains allowing the transport of bicycles get listed
     * @param {boolean} allowed
     * @return {ConnectionRequest}
     */
    bikesAllowed(allowed: boolean): ConnectionRequest;
    /**
     * Restrict response by accessibility of vehicle
     * @param {AccessibilityType} accessibility
     * @return {ConnectionRequest}
     */
    accessibleBy(accessibility: AccessibilityType): ConnectionRequest;
    send(): Promise<Array<Connection>>;
}

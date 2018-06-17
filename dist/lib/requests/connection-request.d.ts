import { TransportApiRequest } from './transport-api-request';
import { Connection } from '../objects/connection';
import { TransportationType } from '../enums/transportation-type';
import { AccessibilityType } from '../enums/accessibility-type';
export declare class ConnectionRequest extends TransportApiRequest {
    private constructor();
    /**
     * Creates new ConnectionRequest by start and end location
     * @param {string} from location name
     * @param {string} to location name
     * @return {ConnectionRequest} new request
     */
    static byFromTo(from: string, to: string): ConnectionRequest;
    /**
     * Find connections via specific location
     * @param {string} viaLocations
     * @return {ConnectionRequest} this request
     */
    via(...viaLocations: string[]): ConnectionRequest;
    /**
     * Find connections at a particular date (time ignored)
     * @param {Date} date
     * @return {ConnectionRequest} this request
     */
    onDate(date: Date): ConnectionRequest;
    /**
     * Find connections for a specific time (day date ignored)
     * @param {Date} time
     * @return {ConnectionRequest} this request
     */
    atTime(time: Date): ConnectionRequest;
    /**
     * Specifies if requested date and time are on arrival (or departure). Default is false => departure
     * @param {boolean} isArrival
     * @return {ConnectionRequest} this request
     */
    dateTimeIsArrival(isArrival: boolean): ConnectionRequest;
    /**
     * Find connections with specific type(s) of transportation
     * @param {TransportationType} transportations
     * @return {ConnectionRequest} this request
     */
    withTransports(...transportations: TransportationType[]): ConnectionRequest;
    /**
     * Limit the responded connections
     * @param {number} limit
     * @return {ConnectionRequest} this request
     */
    limitResponse(limit: number): ConnectionRequest;
    /**
     * Pagination of response. Page number is zero-based (param 0 is first page)
     * @param {number} page
     * @return {ConnectionRequest} this request
     */
    pageOfResponse(page: number): ConnectionRequest;
    /**
     * If set to true, only direct connections get requested. Default is false
     * @param {boolean} isDirectConnection
     * @return {ConnectionRequest} this request
     */
    onlyDirect(isDirectConnection: boolean): ConnectionRequest;
    /**
     * If set to true, only night trains with beds get listed
     * @param {boolean} hasBeds
     * @return {ConnectionRequest} this request
     */
    hasBeds(hasBeds: boolean): ConnectionRequest;
    /**
     * If set to true, only night trains with couchettes get listed
     * @param {boolean} hasCouchettes
     * @return {ConnectionRequest} this request
     */
    hasCouchettes(hasCouchettes: boolean): ConnectionRequest;
    /**
     * If set to true, only trains allowing the transport of bicycles get listed
     * @param {boolean} allowed
     * @return {ConnectionRequest} this request
     */
    bikesAllowed(allowed: boolean): ConnectionRequest;
    /**
     * Restrict response by accessibility of vehicle
     * @param {AccessibilityType} accessibility
     * @return {ConnectionRequest} this request
     */
    accessibleBy(accessibility: AccessibilityType): ConnectionRequest;
    send(): Promise<Array<Connection>>;
}

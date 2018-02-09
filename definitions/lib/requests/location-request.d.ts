import { TransportApiRequest } from './transport-api-request';
import { Location } from '../objects/location';
import { LocationType } from '../enums/location-type';
import { TransportationType } from '../enums/transportation-type';
export declare class LocationRequest extends TransportApiRequest {
    constructor();
    /**
     * Find locations by name
     * @param query Location search string
     * @returns this LocationsRequest
     */
    byName(query: string): LocationRequest;
    /**
     * Find locations by coordinates
     * @param x Latitude coordinate
     * @param y Longitude coordinate
     * @returns this LocationsRequest
     */
    byCoordinates(x: number, y: number): LocationRequest;
    /**
     * Find locations of specific type
     * @param {LocationType} type
     * @returns {LocationRequest}
     */
    ofType(type: LocationType): LocationRequest;
    /**
     * Find locations which have access to specific type(s) of transportation
     * @param {TransportationType} transportations
     */
    withTransports(...transportations: TransportationType[]): LocationRequest;
    send(): Promise<Array<Location>>;
}

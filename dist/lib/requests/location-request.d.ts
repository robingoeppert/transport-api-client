import { TransportApiRequest } from './transport-api-request';
import { Location } from '../objects/location';
import { LocationType } from '../enums/location-type';
import { TransportationType } from '../enums/transportation-type';
export declare class LocationRequest extends TransportApiRequest {
    private constructor();
    /**
     * Creates new LocationRequest finding locations by name
     * @param query Location search string
     * @returns new request
     */
    static byName(query: string): LocationRequest;
    /**
     * Creates new LocationRequest finding locations by coordinates
     * @param x Latitude coordinate
     * @param y Longitude coordinate
     * @returns new request
     */
    static byCoordinates(x: number, y: number): LocationRequest;
    /**
     * Find locations of specific type. Works only with byName
     * @param {LocationType} type
     * @returns {LocationRequest} this request
     */
    ofType(type: LocationType): LocationRequest;
    /**
     * Find locations which have access to specific type(s) of transportation. Works only with byCoordinates
     * @param {TransportationType} transportations
     * @returns {LocationRequest} this request
     */
    withTransports(...transportations: TransportationType[]): LocationRequest;
    send(): Promise<Array<Location>>;
}

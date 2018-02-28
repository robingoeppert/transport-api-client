import {TransportApiRequest} from './transport-api-request';
import {Location} from '../objects/location';
import {LocationType} from '../enums/location-type';
import {TransportationType} from '../enums/transportation-type';
import * as WebRequest from 'web-request';


export class LocationRequest extends TransportApiRequest {

    private constructor() {
        super('locations');
    }


    /**
     * Creates new LocationRequest finding locations by name
     * @param query Location search string
     * @returns new request
     */
    public static byName(query: string): LocationRequest {
        return new LocationRequest()
            .addParam('query', query);
    }

    /**
     * Creates new LocationRequest finding locations by coordinates
     * @param x Latitude coordinate
     * @param y Longitude coordinate
     * @returns new request
     */
    public static byCoordinates(x: number, y: number): LocationRequest {
        return new LocationRequest()
            .addParam('x', String(x))
            .addParam('y', String(y));
    }


    /**
     * Find locations of specific type. Works only with byName
     * @param {LocationType} type
     * @returns {LocationRequest} this request
     */
    public ofType(type: LocationType): LocationRequest {
        return this.addParam('type', type);
    }

    /**
     * Find locations which have access to specific type(s) of transportation. Works only with byCoordinates
     * @param {TransportationType} transportations
     * @returns {LocationRequest} this request
     */
    public withTransports(...transportations: TransportationType[]): LocationRequest {
        for (let transportation of transportations) {
            this.addParam('transportations[]', transportation);
        }

        return this;
    }


    send(): Promise<Array<Location>> {
        return WebRequest.json<LocationResponse>(this.url)
            .then(value => {
                return value.stations;
            });
    }
}


interface LocationResponse {
    stations: Array<Location>;
}

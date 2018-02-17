import {TransportApiRequest} from './transport-api-request';
import {Location} from '../objects/location';
import {LocationType} from '../enums/location-type';
import {TransportationType} from '../enums/transportation-type';
import * as WebRequest from 'web-request';


export class LocationRequest extends TransportApiRequest {

    private constructor() {
        super();
        this.url += 'locations';
    }


    /**
     * Creates new LocationRequest finding locations by name
     * @param query Location search string
     * @returns new LocationsRequest
     */
    public static byName(query: string): LocationRequest {
        const newRequest: LocationRequest = new LocationRequest();
        newRequest.url += newRequest.getParamLeader() + 'query=' + encodeURIComponent(query);

        return newRequest;
    }

    /**
     * Creates new LocationRequest finding locations by coordinates
     * @param x Latitude coordinate
     * @param y Longitude coordinate
     * @returns new LocationsRequest
     */
    public static byCoordinates(x: number, y: number): LocationRequest {
        const newRequest: LocationRequest = new LocationRequest();
        newRequest.url += newRequest.getParamLeader() + 'x=' + x + '&y=' + y;

        return newRequest;
    }


    /**
     * Find locations of specific type. Works only with byName
     * @param {LocationType} type
     * @returns {LocationRequest}
     */
    public ofType(type: LocationType): LocationRequest {
        this.url += this.getParamLeader() + 'type=' + encodeURIComponent(type);

        return this;
    }

    /**
     * Find locations which have access to specific type(s) of transportation. Works only with byCoordinates
     * @param {TransportationType} transportations
     */
    public withTransports(...transportations: TransportationType[]): LocationRequest {
        for (let transportation of transportations) {
            this.url += this.getParamLeader() + 'transportations[]=' + encodeURIComponent(transportation);
        }

        return this;
    }


    send(): Promise<Array<Location>> {
        return WebRequest.json<LocationResponse>(this.url)
            .then(value => {
                return value.stations;
            })
            .catch(reason => {
                return Promise.reject(reason);
            });
    }
}


interface LocationResponse {
    stations: Array<Location>;
}

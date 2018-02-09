import {TransportApiRequest} from './transport-api-request';
import {Location} from '../objects/location';
import {LocationType} from '../enums/location-type';
import {TransportationType} from '../enums/transportation-type';
import * as WebRequest from 'web-request';


export class LocationRequest extends TransportApiRequest {

    constructor() {
        super();
        this.url = this.url + 'locations';
    }


    /**
     * Find locations by name
     * @param query Location search string
     * @returns this LocationsRequest
     */
    byName(query: string): LocationRequest {
        this.url = this.url + this.getParamLeader() + 'query=' + encodeURIComponent(query);

        return this;
    }

    /**
     * Find locations by coordinates
     * @param x Latitude coordinate
     * @param y Longitude coordinate
     * @returns this LocationsRequest
     */
    byCoordinates(x: number, y: number): LocationRequest {
        return this;
    }

    /**
     * Find locations of specific type
     * @param {LocationType} type
     * @returns {LocationRequest}
     */
    withType(type: LocationType): LocationRequest {
        this.url = this.url + this.getParamLeader() + 'type=' + encodeURIComponent(type);

        return this;
    }

    /**
     * Find locations which have access to specific type(s) of transportation
     * @param {TransportationType} transportations
     */
    withTransports(...transportations: TransportationType[]): LocationRequest {
        for (let transportation of transportations) {
            this.url = this.url + this.getParamLeader() + 'transportations[]=' + encodeURIComponent(transportation);
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

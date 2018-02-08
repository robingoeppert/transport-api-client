import {Location} from './objects/location';
import {Connection} from './objects/connection';
import {Journey} from './objects/journey';
import {LocationRequest} from './requests/location-request';
import {TransportApiRequest} from './requests/transport-api-request';


export class TransportApiClient {

    public getStationsIn(locationName: string): Promise<Array<Location>> {
        let locationRequest = new LocationRequest();
        let returnValue: Array<Location> = [];

        return locationRequest
            .byName(locationName)
            .send();
    }

    /* TODO implementation */
    public getConnections(): Array<Connection> {
        return [];
    }

    /* TODO implementation */
    public getStationboard(): Array<Journey> {
        return [];
    }

    /* TODO implementation */
    public request(request: TransportApiRequest): Promise<any> {
        return Promise.reject('Not implemented yet');
    }
}

import {Location} from './objects/location';
import {Connection} from './objects/connection';
import {Journey} from './objects/journey';
import {LocationRequest} from './requests/location-request';
import {TransportApiRequest} from './requests/transport-api-request';
import {ConnectionRequest} from './requests/connection-request';
import {StationboardRequest} from './requests/stationboard-request';


export class TransportApiClient {

    /**
     * Provides a custom location request
     * @return {LocationRequest}
     */
    public requestLocations(): LocationRequest {
        return new LocationRequest();
    }

    /**
     * Provides a custom connection request
     * @return {ConnectionRequest}
     */
    public requestConnections(): ConnectionRequest {
        return new ConnectionRequest();
    }

    /**
     * Provides a custom stationboard request
     * @return {StationboardRequest}
     */
    public requestStationboard(): StationboardRequest {
        return new StationboardRequest();
    }

    /**
     * Get stations by a location name
     * @param {string} locationName
     * @return {Promise<Array<Location>>}
     */
    public getStationsIn(locationName: string): Promise<Array<Location>> {
        let locationRequest = new LocationRequest();

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
}

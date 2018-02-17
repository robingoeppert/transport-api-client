import {Location} from './objects/location';
import {Connection} from './objects/connection';
import {Journey} from './objects/journey';
import {LocationRequest} from './requests/location-request';
import {ConnectionRequest} from './requests/connection-request';
import {StationboardRequest} from './requests/stationboard-request';


export class TransportApiClient {

    /**
     * Provides a custom location request by location name
     * @param {string} name
     * @return {LocationRequest}
     */
    public requestLocationsByName(name: string): LocationRequest {
        return LocationRequest.byName(name);
    }

    /**
     * Provides a custom location request by coordinates
     * @param {number} x
     * @param {number} y
     * @return {LocationRequest}
     */
    public requestLocationsByCoordinates(x: number, y: number): LocationRequest {
        return LocationRequest.byCoordinates(x, y);
    }

    /**
     * Provides a custom connection request
     * @param from depart location
     * @param to arrive location
     * @return {ConnectionRequest}
     */
    public requestConnections(from: string, to: string): ConnectionRequest {
        return ConnectionRequest.byFromTo(from, to);
    }

    /**
     * Provides a custom stationboard request based on station name
     * @param {string} station for stationboard
     * @return {StationboardRequest}
     */
    public requestStationboardByName(station: string): StationboardRequest {
        return StationboardRequest.byStationName(station);
    }

    /**
     * Provides a custom stationboard request based on station ID
     * @param {string} station
     * @return {StationboardRequest}
     */
    public requestStationboardById(station: string): StationboardRequest {
        return StationboardRequest.byStationId(station);
    }

    /**
     * Get stations by a location name
     * @param {string} locationName
     * @return {Promise<Array<Location>>}
     */
    public getStationsIn(locationName: string): Promise<Array<Location>> {
        let locationRequest = LocationRequest.byName(locationName);

        return locationRequest.send();
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

import { Location } from './objects/location';
import { Connection } from './objects/connection';
import { Journey } from './objects/journey';
import { LocationRequest } from './requests/location-request';
import { ConnectionRequest } from './requests/connection-request';
import { StationboardRequest } from './requests/stationboard-request';
export declare class TransportApiClient {
    /**
     * Provides a custom location request by location name
     * @param {string} name
     * @return {LocationRequest}
     */
    requestLocationsByName(name: string): LocationRequest;
    /**
     * Provides a custom location request by coordinates
     * @param {number} x
     * @param {number} y
     * @return {LocationRequest}
     */
    requestLocationsByCoordinates(x: number, y: number): LocationRequest;
    /**
     * Provides a custom connection request
     * @param from depart location
     * @param to arrive location
     * @return {ConnectionRequest}
     */
    requestConnections(from: string, to: string): ConnectionRequest;
    /**
     * Provides a custom stationboard request
     * @return {StationboardRequest}
     */
    requestStationboard(): StationboardRequest;
    /**
     * Get stations by a location name
     * @param {string} locationName
     * @return {Promise<Array<Location>>}
     */
    getStationsIn(locationName: string): Promise<Array<Location>>;
    getConnections(): Array<Connection>;
    getStationboard(): Array<Journey>;
}

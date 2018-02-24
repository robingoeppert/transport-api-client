import { Location } from './objects/location';
import { LocationRequest } from './requests/location-request';
import { ConnectionRequest } from './requests/connection-request';
import { StationboardRequest } from './requests/stationboard-request';
import { StationboardItem } from './objects/stationboard-item';
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
     * Provides a custom stationboard request based on station name
     * @param {string} station for stationboard
     * @return {StationboardRequest}
     */
    requestStationboardByName(station: string): StationboardRequest;
    /**
     * Provides a custom stationboard request based on station ID
     * @param {string} station
     * @return {StationboardRequest}
     */
    requestStationboardById(station: string): StationboardRequest;
    /**
     * Get stations by a location name
     * @param {string} locationName
     * @return {Promise<Array<Location>>}
     */
    getStationsIn(locationName: string): Promise<Array<Location>>;
    /**
     * Get the departures of a station for the next hour, but at max. 10 departures
     * @param {string} stationName
     * @return {Array<StationboardItem>}
     */
    getNextDepartures(stationName: string): Promise<Array<StationboardItem>>;
}

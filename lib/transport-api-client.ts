import {Location} from './objects/location';
import {LocationRequest} from './requests/location-request';
import {ConnectionRequest} from './requests/connection-request';
import {StationboardRequest} from './requests/stationboard-request';
import {StationboardItem} from './objects/stationboard-item';
import * as moment from 'moment';
import {Moment} from 'moment';


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

    /**
     * Get the departures of a station for the next hour, but at max. 10 departures
     * @param {string} stationName
     * @return {Array<StationboardItem>}
     */
    public getNextDepartures(stationName: string): Promise<Array<StationboardItem>> {
        const maxDate: Moment = moment().add(1, 'h');
        const request = StationboardRequest.byStationName(stationName).limitResponse(10);

        return request.send()
            .then(response => {
                const stationboard: Array<StationboardItem> = [];

                for (let item of response) {
                    if (moment.unix(item.stop.departureTimestamp).isBefore(maxDate)) {
                        stationboard.push(item);
                    }
                }

                return stationboard;
            });
    }
}

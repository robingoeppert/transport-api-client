"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var location_request_1 = require("./requests/location-request");
var connection_request_1 = require("./requests/connection-request");
var stationboard_request_1 = require("./requests/stationboard-request");
var TransportApiClient = /** @class */ (function () {
    function TransportApiClient() {
    }
    /**
     * Provides a custom location request by location name
     * @param {string} name
     * @return {LocationRequest}
     */
    TransportApiClient.prototype.requestLocationsByName = function (name) {
        return location_request_1.LocationRequest.byName(name);
    };
    /**
     * Provides a custom location request by coordinates
     * @param {number} x
     * @param {number} y
     * @return {LocationRequest}
     */
    TransportApiClient.prototype.requestLocationsByCoordinates = function (x, y) {
        return location_request_1.LocationRequest.byCoordinates(x, y);
    };
    /**
     * Provides a custom connection request
     * @param from depart location
     * @param to arrive location
     * @return {ConnectionRequest}
     */
    TransportApiClient.prototype.requestConnections = function (from, to) {
        return connection_request_1.ConnectionRequest.byFromTo(from, to);
    };
    /**
     * Provides a custom stationboard request
     * @return {StationboardRequest}
     */
    TransportApiClient.prototype.requestStationboard = function () {
        return new stationboard_request_1.StationboardRequest();
    };
    /**
     * Get stations by a location name
     * @param {string} locationName
     * @return {Promise<Array<Location>>}
     */
    TransportApiClient.prototype.getStationsIn = function (locationName) {
        var locationRequest = location_request_1.LocationRequest.byName(locationName);
        return locationRequest.send();
    };
    /* TODO implementation */
    TransportApiClient.prototype.getConnections = function () {
        return [];
    };
    /* TODO implementation */
    TransportApiClient.prototype.getStationboard = function () {
        return [];
    };
    return TransportApiClient;
}());
exports.TransportApiClient = TransportApiClient;

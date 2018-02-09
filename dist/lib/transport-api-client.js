"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var location_request_1 = require("./requests/location-request");
var connection_request_1 = require("./requests/connection-request");
var stationboard_request_1 = require("./requests/stationboard-request");
var TransportApiClient = /** @class */ (function () {
    function TransportApiClient() {
    }
    /**
     * Provides a custom location request
     * @return {LocationRequest}
     */
    TransportApiClient.prototype.requestLocations = function () {
        return new location_request_1.LocationRequest();
    };
    /**
     * Provides a custom connection request
     * @return {ConnectionRequest}
     */
    TransportApiClient.prototype.requestConnections = function (from, to) {
        return new connection_request_1.ConnectionRequest(from, to);
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
        var locationRequest = new location_request_1.LocationRequest();
        return locationRequest
            .byName(locationName)
            .send();
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

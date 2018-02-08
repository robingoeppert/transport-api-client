"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var location_request_1 = require("./requests/location-request");
var TransportApiClient = /** @class */ (function () {
    function TransportApiClient() {
    }
    TransportApiClient.prototype.getStationsIn = function (locationName) {
        var locationRequest = new location_request_1.LocationRequest();
        var returnValue = [];
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
    /* TODO implementation */
    TransportApiClient.prototype.request = function (request) {
        return Promise.reject('Not implemented yet');
    };
    return TransportApiClient;
}());
exports.TransportApiClient = TransportApiClient;

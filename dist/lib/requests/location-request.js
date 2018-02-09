"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var transport_api_request_1 = require("./transport-api-request");
var WebRequest = require("web-request");
var LocationRequest = /** @class */ (function (_super) {
    __extends(LocationRequest, _super);
    function LocationRequest() {
        var _this = _super.call(this) || this;
        _this.url += 'locations';
        return _this;
    }
    /**
     * Find locations by name
     * @param query Location search string
     * @returns this LocationsRequest
     */
    LocationRequest.prototype.byName = function (query) {
        this.url += this.getParamLeader() + 'query=' + encodeURIComponent(query);
        return this;
    };
    /**
     * Find locations by coordinates
     * @param x Latitude coordinate
     * @param y Longitude coordinate
     * @returns this LocationsRequest
     */
    LocationRequest.prototype.byCoordinates = function (x, y) {
        /* TODO implementation */
        return this;
    };
    /**
     * Find locations of specific type
     * @param {LocationType} type
     * @returns {LocationRequest}
     */
    LocationRequest.prototype.ofType = function (type) {
        this.url += this.getParamLeader() + 'type=' + encodeURIComponent(type);
        return this;
    };
    /**
     * Find locations which have access to specific type(s) of transportation
     * @param {TransportationType} transportations
     */
    LocationRequest.prototype.withTransports = function () {
        var transportations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transportations[_i] = arguments[_i];
        }
        for (var _a = 0, transportations_1 = transportations; _a < transportations_1.length; _a++) {
            var transportation = transportations_1[_a];
            this.url += this.getParamLeader() + 'transportations[]=' + encodeURIComponent(transportation);
        }
        return this;
    };
    LocationRequest.prototype.send = function () {
        return WebRequest.json(this.url)
            .then(function (value) {
            return value.stations;
        })
            .catch(function (reason) {
            return Promise.reject(reason);
        });
    };
    return LocationRequest;
}(transport_api_request_1.TransportApiRequest));
exports.LocationRequest = LocationRequest;

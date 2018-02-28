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
var StationboardRequest = /** @class */ (function (_super) {
    __extends(StationboardRequest, _super);
    function StationboardRequest() {
        return _super.call(this, 'stationboard') || this;
    }
    /**
     * Creates new StationboardRequest for station found by name
     * @param {string} name station
     * @return {StationboardRequest} new request
     */
    StationboardRequest.byStationName = function (name) {
        return new StationboardRequest()
            .addParam('station', name);
    };
    /**
     * Creates new StationboardRequest for station found by id
     * @param {string} id station
     * @return {StationboardRequest} new request
     */
    StationboardRequest.byStationId = function (id) {
        return new StationboardRequest()
            .addParam('id', id);
    };
    /**
     * Limit responded departures/arrivals
     * @param {number} limit
     * @return {StationboardRequest} this request
     */
    StationboardRequest.prototype.limitResponse = function (limit) {
        return this.addParam('limit', String(limit));
    };
    /**
     * Get departures/arrivals of vehicles of specific type
     * @param {TransportationType} transportations
     * @return {StationboardRequest} this request
     */
    StationboardRequest.prototype.withTransports = function () {
        var transportations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transportations[_i] = arguments[_i];
        }
        for (var _a = 0, transportations_1 = transportations; _a < transportations_1.length; _a++) {
            var transportation = transportations_1[_a];
            this.addParam('transportations[]', transportation);
        }
        return this;
    };
    /**
     * Desired date and time of departure/arrival
     * @param {Date} date Date and Time
     * @return {StationboardRequest} this request
     */
    StationboardRequest.prototype.atDateTime = function (date) {
        var month = this.numberToTwoDigitString(date.getMonth() + 1);
        var day = this.numberToTwoDigitString(date.getDate());
        var hours = this.numberToTwoDigitString(date.getHours());
        var minutes = this.numberToTwoDigitString(date.getMinutes());
        // Results in format yyyy-MM-dd hh:mm
        var dateString = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
        return this.addParam('datetime', dateString);
    };
    /**
     * Specifies if departures or arrivals get responded. Default is departure
     * @param {StationboardType} type
     * @return {StationboardRequest} this request
     */
    StationboardRequest.prototype.ofType = function (type) {
        return this.addParam('type', type);
    };
    StationboardRequest.prototype.send = function () {
        return WebRequest.json(this.url)
            .then(function (value) {
            return value.stationboard;
        });
    };
    return StationboardRequest;
}(transport_api_request_1.TransportApiRequest));
exports.StationboardRequest = StationboardRequest;

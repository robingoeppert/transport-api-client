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
var ConnectionRequest = /** @class */ (function (_super) {
    __extends(ConnectionRequest, _super);
    function ConnectionRequest() {
        return _super.call(this, 'connections') || this;
    }
    /**
     * Creates new ConnectionRequest by start and end location
     * @param {string} from location name
     * @param {string} to location name
     * @return {ConnectionRequest} new request
     */
    ConnectionRequest.byFromTo = function (from, to) {
        return new ConnectionRequest()
            .addParam('from', from)
            .addParam('to', to);
    };
    /**
     * Find connections via specific location
     * @param {string} viaLocations
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.via = function () {
        var viaLocations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            viaLocations[_i] = arguments[_i];
        }
        for (var _a = 0, viaLocations_1 = viaLocations; _a < viaLocations_1.length; _a++) {
            var viaLocation = viaLocations_1[_a];
            this.addParam('via[]', viaLocation);
        }
        return this;
    };
    /**
     * Find connections at a particular date (time ignored)
     * @param {Date} date
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.onDate = function (date) {
        var month = this.numberToTwoDigitString(date.getMonth() + 1);
        var day = this.numberToTwoDigitString(date.getDate());
        // Results in format yyyy-mm-dd
        var dateString = date.getFullYear() + '-' + month + '-' + day;
        return this.addParam('date', dateString);
    };
    /**
     * Find connections for a specific time (day date ignored)
     * @param {Date} time
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.atTime = function (time) {
        var hours = this.numberToTwoDigitString(time.getHours());
        var minutes = this.numberToTwoDigitString(time.getMinutes());
        return this.addParam('time', hours + ':' + minutes);
    };
    /**
     * Specifies if requested date and time are on arrival (or departure). Default is false => departure
     * @param {boolean} isArrival
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.dateTimeIsArrival = function (isArrival) {
        return this.addParam('isArrivalTime', (isArrival ? '1' : '0'));
    };
    /**
     * Find connections with specific type(s) of transportation
     * @param {TransportationType} transportations
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.withTransports = function () {
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
     * Limit the responded connections
     * @param {number} limit
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.limitResponse = function (limit) {
        return this.addParam('limit', String(limit));
    };
    /**
     * Pagination of response. Page number is zero-based (param 0 is first page)
     * @param {number} page
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.pageOfResponse = function (page) {
        return this.addParam('page', String(page));
    };
    /**
     * If set to true, only direct connections get requested. Default is false
     * @param {boolean} isDirectConnection
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.onlyDirect = function (isDirectConnection) {
        return this.addParam('direct', (isDirectConnection ? '1' : '0'));
    };
    /**
     * If set to true, only night trains with beds get listed
     * @param {boolean} hasBeds
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.hasBeds = function (hasBeds) {
        return this.addParam('sleeper', (hasBeds ? '1' : '0'));
    };
    /**
     * If set to true, only night trains with couchettes get listed
     * @param {boolean} hasCouchettes
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.hasCouchettes = function (hasCouchettes) {
        return this.addParam('couchette', (hasCouchettes ? '1' : '0'));
    };
    /**
     * If set to true, only trains allowing the transport of bicycles get listed
     * @param {boolean} allowed
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.bikesAllowed = function (allowed) {
        return this.addParam('bike', (allowed ? '1' : '0'));
    };
    /**
     * Restrict response by accessibility of vehicle
     * @param {AccessibilityType} accessibility
     * @return {ConnectionRequest} this request
     */
    ConnectionRequest.prototype.accessibleBy = function (accessibility) {
        return this.addParam('accessibility', accessibility);
    };
    ConnectionRequest.prototype.send = function () {
        return WebRequest.json(this.url)
            .then(function (value) {
            return value.connections;
        });
    };
    return ConnectionRequest;
}(transport_api_request_1.TransportApiRequest));
exports.ConnectionRequest = ConnectionRequest;

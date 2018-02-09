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
    function ConnectionRequest(from, to) {
        var _this = _super.call(this) || this;
        _this.url += 'connections?from=' + encodeURIComponent(from) + '&to=' + encodeURIComponent(to);
        return _this;
    }
    /**
     * Find connections via specific location
     * @param {string} viaLocations
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.via = function () {
        var viaLocations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            viaLocations[_i] = arguments[_i];
        }
        for (var _a = 0, viaLocations_1 = viaLocations; _a < viaLocations_1.length; _a++) {
            var viaLocation = viaLocations_1[_a];
            this.url += '&via[]=' + encodeURIComponent(viaLocation);
        }
        return this;
    };
    /**
     * Find connections at a particular date (time ignored)
     * @param {Date} date
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.onDate = function (date) {
        var month = this.numberToTwoDigitString(date.getMonth());
        var day = this.numberToTwoDigitString(date.getDate());
        // Results in format yyyy-mm-dd
        var dateString = date.getFullYear() + '-' + month + '-' + day;
        this.url += '&date=' + encodeURIComponent(dateString);
        return this;
    };
    /**
     * Find connections for a specific time (day date ignored)
     * @param {Date} time
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.atTime = function (time) {
        var hours = this.numberToTwoDigitString(time.getHours());
        var minutes = this.numberToTwoDigitString(time.getMinutes());
        this.url += '&time=' + hours + ':' + minutes;
        return this;
    };
    /**
     * Specifies if requested date and time are on arrival (or departure). Default is false => departure
     * @param {boolean} isArrival
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.withTimeIsArrival = function (isArrival) {
        this.url += '&isArrivalTime=' + (isArrival ? '1' : '0');
        return this;
    };
    /* TODO likly the same as in LocationRequest. Find an efficient solution */
    ConnectionRequest.prototype.withTransports = function () {
        var transports = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transports[_i] = arguments[_i];
        }
        return this;
    };
    /**
     * Limit the responded connections
     * @param {number} limit
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.limitResponse = function (limit) {
        this.url += '&limit=' + limit;
        return this;
    };
    /**
     * Pagination of response. Page number is zero-based (param 0 is first page)
     * @param {number} page
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.pageOfResponse = function (page) {
        this.url += '&page=' + page;
        return this;
    };
    /**
     * If set to true, only direct connections get requested. Default is false
     * @param {boolean} isDirectConnection
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.onlyDirect = function (isDirectConnection) {
        this.url += '&direct=' + (isDirectConnection ? '1' : '0');
        return this;
    };
    /**
     * If set to true, only night trains with beds get listed
     * @param {boolean} hasBeds
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.hasBeds = function (hasBeds) {
        this.url += '&sleeper=' + (hasBeds ? '1' : '0');
        return this;
    };
    /**
     * If set to true, only night trains with couchettes get listed
     * @param {boolean} hasCouchettes
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.hasCouchettes = function (hasCouchettes) {
        this.url += '&couchette=' + (hasCouchettes ? '1' : '0');
        return this;
    };
    /**
     * If set to true, only trains allowing the transport of bicycles get listed
     * @param {boolean} allowed
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.bikesAllowed = function (allowed) {
        this.url += '&bike=' + (allowed ? '1' : '0');
        return this;
    };
    /**
     * Restrict response by accessibility of vehicle
     * @param {AccessibilityType} accessibility
     * @return {ConnectionRequest}
     */
    ConnectionRequest.prototype.accessibleBy = function (accessibility) {
        this.url += '&accessibility=' + accessibility;
        return this;
    };
    ConnectionRequest.prototype.send = function () {
        return WebRequest.json(this.url)
            .then(function (value) {
            return value.connections;
        })
            .catch(function (reason) {
            return Promise.reject(reason);
        });
    };
    return ConnectionRequest;
}(transport_api_request_1.TransportApiRequest));
exports.ConnectionRequest = ConnectionRequest;

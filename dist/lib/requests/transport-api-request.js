"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransportApiRequest = /** @class */ (function () {
    function TransportApiRequest(api) {
        this.BASE_URL = 'http://transport.opendata.ch/v1/';
        this.url = this.BASE_URL + api;
    }
    /**
     * Add a GET param to URL. Key and value get url-encoded
     * @param {string} key
     * @param {string} value
     */
    TransportApiRequest.prototype.addParam = function (key, value) {
        this.url += this.getParamLeader() + key + "=" + encodeURIComponent(value);
        return this;
    };
    /**
     * Returns ? for the first parameter and & for all further
     */
    TransportApiRequest.prototype.getParamLeader = function () {
        return this.url.includes('?') ? '&' : '?';
    };
    /**
     * Date utility. Leads the number string by 0 if number is one digit
     * @param {number} number
     * @return {string}
     */
    TransportApiRequest.prototype.numberToTwoDigitString = function (number) {
        return number < 10 ? '0' + number : number.toString();
    };
    /**
     * Get request URL
     * @return {string} URL
     */
    TransportApiRequest.prototype.getUrl = function () {
        return this.url;
    };
    return TransportApiRequest;
}());
exports.TransportApiRequest = TransportApiRequest;

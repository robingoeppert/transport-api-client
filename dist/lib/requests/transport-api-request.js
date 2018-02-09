"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransportApiRequest = /** @class */ (function () {
    function TransportApiRequest() {
        this.BASE_URL = 'http://transport.opendata.ch/v1/';
        this.url = this.BASE_URL;
    }
    /**
     * Returns ? for the first parameter and & for all further
     */
    TransportApiRequest.prototype.getParamLeader = function () {
        return this.url.includes('?') ? '&' : '?';
    };
    return TransportApiRequest;
}());
exports.TransportApiRequest = TransportApiRequest;
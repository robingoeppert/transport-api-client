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
var StationboardRequest = /** @class */ (function (_super) {
    __extends(StationboardRequest, _super);
    function StationboardRequest() {
        return _super.call(this, 'stationboard') || this;
    }
    StationboardRequest.byStationName = function (name) {
        return new StationboardRequest()
            .addParam('station', name);
    };
    StationboardRequest.byStationId = function (id) {
        return new StationboardRequest()
            .addParam('id', id);
    };
    /*
    TODO implement param methods and SEND
     */
    StationboardRequest.prototype.send = function () {
        return new Promise(null);
    };
    return StationboardRequest;
}(transport_api_request_1.TransportApiRequest));
exports.StationboardRequest = StationboardRequest;

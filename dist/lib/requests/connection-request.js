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
var ConnectionRequest = /** @class */ (function (_super) {
    __extends(ConnectionRequest, _super);
    function ConnectionRequest() {
        var _this = _super.call(this) || this;
        _this.url = _this.url + 'connections';
        return _this;
    }
    /* TODO implementation */
    ConnectionRequest.prototype.send = function () {
        return new Promise(null);
    };
    return ConnectionRequest;
}(transport_api_request_1.TransportApiRequest));
exports.ConnectionRequest = ConnectionRequest;

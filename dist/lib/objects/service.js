"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    function Service() {
    }
    Object.defineProperty(Service.prototype, "regular", {
        get: function () {
            return this._regular;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "irregular", {
        get: function () {
            return this._irregular;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());
exports.Service = Service;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prognosis = /** @class */ (function () {
    function Prognosis() {
    }
    Object.defineProperty(Prognosis.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prognosis.prototype, "departure", {
        get: function () {
            return this._departure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prognosis.prototype, "arrival", {
        get: function () {
            return this._arrival;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prognosis.prototype, "capacity1st", {
        get: function () {
            return this._capacity1st;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prognosis.prototype, "capacity2nd", {
        get: function () {
            return this._capacity2nd;
        },
        enumerable: true,
        configurable: true
    });
    return Prognosis;
}());
exports.Prognosis = Prognosis;

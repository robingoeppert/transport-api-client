"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connection = /** @class */ (function () {
    function Connection() {
    }
    Object.defineProperty(Connection.prototype, "from", {
        get: function () {
            return this._from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "to", {
        get: function () {
            return this._to;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "capacity1st", {
        get: function () {
            return this._capacity1st;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "capacity2nd", {
        get: function () {
            return this._capacity2nd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "sections", {
        get: function () {
            return this._sections;
        },
        enumerable: true,
        configurable: true
    });
    return Connection;
}());
exports.Connection = Connection;

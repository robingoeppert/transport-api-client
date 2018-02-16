"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Section = /** @class */ (function () {
    function Section() {
    }
    Object.defineProperty(Section.prototype, "journey", {
        get: function () {
            return this._journey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Section.prototype, "walk", {
        get: function () {
            return this._walk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Section.prototype, "departure", {
        get: function () {
            return this._departure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Section.prototype, "arrival", {
        get: function () {
            return this._arrival;
        },
        enumerable: true,
        configurable: true
    });
    return Section;
}());
exports.Section = Section;

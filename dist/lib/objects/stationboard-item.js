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
var journey_1 = require("./journey");
var StationboardItem = /** @class */ (function (_super) {
    __extends(StationboardItem, _super);
    function StationboardItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StationboardItem.prototype, "stop", {
        get: function () {
            return this._stop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StationboardItem.prototype, "subcategory", {
        get: function () {
            return this._subcategory;
        },
        enumerable: true,
        configurable: true
    });
    return StationboardItem;
}(journey_1.Journey));
exports.StationboardItem = StationboardItem;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        var unsorted = true;
        while (unsorted) {
            var unchanged = true;
            for (var i = 0; i < length - 1; i++) {
                if (this.compare(i, i + 1)) {
                    this.swap(i, i + 1);
                    unchanged = false;
                }
            }
            if (unchanged) {
                unsorted = false;
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;

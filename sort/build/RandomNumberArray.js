"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
var Random = /** @class */ (function () {
    function Random(size) {
        this.size = size;
    }
    Random.prototype.generateNumbers = function () {
        var output = [];
        for (var i = 0; i < this.size; i++) {
            var random = +Math.random().toString()[5];
            var negative = +Math.random().toString()[5];
            if (negative > 4) {
                output.push(-random);
            }
            else
                output.push(random);
        }
        return output;
    };
    Random.prototype.generateString = function () {
        var str = '';
        for (var i = 0; i < this.size; i++) {
            var randomNumber1 = String.fromCharCode(Math.random() * (90 - 65) + 65);
            var randomNumber2 = String.fromCharCode(Math.random() * (122 - 97) + 97);
            var num1Ornum2 = +Math.random().toString()[5] > 4 ? randomNumber1 : randomNumber2;
            str += num1Ornum2;
        }
        return str;
    };
    return Random;
}());
exports.Random = Random;

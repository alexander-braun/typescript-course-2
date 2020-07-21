"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var node = this.head;
            var length = 1;
            while (node.next) {
                node = node.next;
                length++;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index out of bounds');
        var indexNow = 0;
        var node = this.head;
        while (node) {
            if (indexNow === index) {
                return node;
            }
            indexNow++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (i, j) {
        if (!this.head)
            throw new Error('List is empty');
        return this.at(i).data > this.at(j).data;
    };
    LinkedList.prototype.swap = function (i, j) {
        var leftNode = this.at(i);
        var rightNode = this.at(j);
        var leftValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftValue;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;

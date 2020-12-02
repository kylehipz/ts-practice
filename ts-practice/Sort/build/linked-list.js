"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.node = void 0;
var sorter_1 = require("./sorter");
var node = /** @class */ (function () {
    function node(data) {
        this.data = data;
        this.next = null;
    }
    return node;
}());
exports.node = node;
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var tail = this.head;
            while (tail.next) {
                length++;
                tail = tail.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var ctr = 0;
        var tail = this.head;
        while (tail) {
            if (ctr === index) {
                return tail;
            }
            ctr++;
            tail = tail.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var tmp = this.at(rightIndex).data;
        this.at(rightIndex).data = this.at(leftIndex).data;
        this.at(leftIndex).data = tmp;
    };
    LinkedList.prototype.showData = function () {
        if (!this.head) {
            console.log([]);
            return;
        }
        var lst = [];
        var tail = this.head;
        while (tail) {
            lst.push(tail === null || tail === void 0 ? void 0 : tail.data);
            tail = tail.next;
        }
        console.log(lst);
    };
    return LinkedList;
}(sorter_1.Sorter));
exports.LinkedList = LinkedList;

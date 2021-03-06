"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_error_1 = require("./abstract-error");
/**
 * Error thrown when the value of an argument is outside the allowable
 * range of values as defined by the invoked method.
 */
var ArgumentOutOfRangeError = /** @class */ (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    /**
     * Create a new argument out of range error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    function ArgumentOutOfRangeError(message, innerError) {
        var _this = _super.call(this, message || 'Specified argument was out of the range of valid values.', innerError) || this;
        //For transpiling to es5 support.
        Object.setPrototypeOf(_this, ArgumentOutOfRangeError.prototype);
        return _this;
    }
    return ArgumentOutOfRangeError;
}(abstract_error_1.AbstractError));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;

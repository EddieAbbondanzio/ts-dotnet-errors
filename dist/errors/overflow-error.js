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
 * Error thrown when an arithmetic, casting, or conversion operation
 * results in an overflow.
 */
var OverflowError = /** @class */ (function (_super) {
    __extends(OverflowError, _super);
    /**
     * Create a new divide by zero error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    function OverflowError(message, innerError) {
        var _this = _super.call(this, message || 'Arithmetic operation resulted in an overflow.', innerError) || this;
        //For transpiling to es5 support.
        Object.setPrototypeOf(_this, OverflowError);
        return _this;
    }
    return OverflowError;
}(abstract_error_1.AbstractError));
exports.OverflowError = OverflowError;

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
 * Error thrown when a method is depreciated, and no
 * longer supported.
 */
var DepreciatedError = /** @class */ (function (_super) {
    __extends(DepreciatedError, _super);
    /**
     * Create a new depreciated error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    function DepreciatedError(message, innerError) {
        var _this = _super.call(this, message || 'This method has been depreciated.', innerError) || this;
        //For transpiling to es5 support.
        Object.setPrototypeOf(_this, DepreciatedError);
        return _this;
    }
    return DepreciatedError;
}(abstract_error_1.AbstractError));
exports.DepreciatedError = DepreciatedError;

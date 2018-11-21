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
/**
 * Base class for all custom errors to derive from.
 */
var AbstractError = /** @class */ (function (_super) {
    __extends(AbstractError, _super);
    /**
     * Create a new abstract error.
     * @param message The error message.
     * @param innerError The inner error.
     */
    function AbstractError(message, innerError) {
        var _this = _super.call(this, message) || this;
        _this.innerError = innerError;
        //For transpiling to es5 support.
        Object.setPrototypeOf(_this, AbstractError);
        return _this;
    }
    return AbstractError;
}(Error));
exports.AbstractError = AbstractError;

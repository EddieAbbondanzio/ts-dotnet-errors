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
 * Error thrown when there is an issue with the database.
 */
var DatabaseError = /** @class */ (function (_super) {
    __extends(DatabaseError, _super);
    /**
     * Create a new database error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    function DatabaseError(message, innerError) {
        var _this = _super.call(this, message || 'An error occured accessing the database.', innerError) || this;
        //For transpiling to es5 support.
        Object.setPrototypeOf(_this, DatabaseError);
        return _this;
    }
    return DatabaseError;
}(abstract_error_1.AbstractError));
exports.DatabaseError = DatabaseError;

import { AbstractError } from "./abstract-error";

/**
 * Error thrown for errors in an arithmetic, casting, or conversion
 * operation.
 */
export class ArithmeticError extends AbstractError {
    /**
     * Create a new arithmetic error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error) {
        super(message || 'Overflow or underflow in the arithmetic operation.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, ArithmeticError.prototype);
    }
}
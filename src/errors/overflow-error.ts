import { AbstractError } from "./abstract-error";

/**
 * Error thrown when an arithmetic, casting, or conversion operation
 * results in an overflow.
 */
export class OverflowError extends AbstractError {
    /**
     * Create a new divide by zero error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError) {
        super(message || 'Arithmetic operation resulted in an overflow.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, OverflowError);
    }
}
import { AbstractError } from "./abstract-error";

/**
 * Error for when an argument provided to a method is not valid.
 */
export class ArgumentError extends AbstractError {
    /**
     * Create a new argument error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error) {
        super(message || 'Value does not fall within the expected range.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, ArgumentError.prototype);
    }
}
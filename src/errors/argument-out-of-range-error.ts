import { AbstractError } from "./abstract-error";

/**
 * Error thrown when the value of an argument is outside the allowable
 * range of values as defined by the invoked method.
 */
export class ArgumentOutOfRangeError extends AbstractError {
    /**
     * Create a new argument out of range error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError) {
        super(message || 'Specified argument was out of the range of valid values.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, ArgumentOutOfRangeError);
    }
}
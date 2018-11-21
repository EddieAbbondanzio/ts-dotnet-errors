import { AbstractError } from "./abstract-error";

/**
 * Error thrown when a method is depreciated, and no 
 * longer supported.
 */
export class DepreciatedError extends AbstractError {
    /**
     * Create a new depreciated error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError) {
        super(message || 'This method has been depreciated.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, DepreciatedError);
    }
}
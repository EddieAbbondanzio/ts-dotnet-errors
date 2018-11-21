import { AbstractError } from "./abstract-error";

/**
 * Error that is thrown when an I/O error occurs.
 */
export class IOError extends AbstractError {
    /**
     * Create a new IO error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error) {
        super(message || 'I/O error occured.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, IOError.prototype);
    }
}
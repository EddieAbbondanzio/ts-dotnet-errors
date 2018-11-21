import { AbstractError } from "./abstract-error";

/**
 * Error thrown when an invoked method is not supported.
 */
export class NotSupportedError extends AbstractError {
    /**
     * Create a new not supported error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error) {
        super(message || 'Specified method is not supported.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, NotSupportedError.prototype);
    }
}
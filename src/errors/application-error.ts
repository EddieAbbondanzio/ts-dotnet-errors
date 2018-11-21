import { AbstractError } from "./abstract-error";

/**
 * Serves as the base class for application-defined errors.
 */
export class ApplicationError extends AbstractError {
    /**
     * Create a new application error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error) {
        super(message || 'Error occured in the application.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, ApplicationError.prototype);
    }
}
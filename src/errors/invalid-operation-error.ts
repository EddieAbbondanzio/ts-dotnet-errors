import { AbstractError } from "./abstract-error";

/**
 * Error thrown when a method call is invalid for the object's current state.
 */
export class InvalidOperationError extends AbstractError {
    /**
     * Create a new invalid operation error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error) {
        super(message || 'Operation is not valid due to the current state of the object.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, InvalidOperationError.prototype);
    }
}
import { AbstractError } from "./abstract-error";

/**
 * Error thrown when there is an attempt to dereference a null 
 * object reference.
 */
export class NullReferenceError extends AbstractError {
    /**
     * Create a new null reference error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError) {
        super(message || 'Object reference not set to an instance of an object.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, NullReferenceError);
    }
}
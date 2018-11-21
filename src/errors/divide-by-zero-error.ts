import { AbstractError } from "./abstract-error";

/**
 * Error thrown when there is an attempt to divide an integral or 
 * decimal value by zero.
 */
export class DivideByZeroError extends AbstractError {
    /**
     * Create a new divide by zero error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError) {
        super(message || 'Attempted to divide by zero.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, DivideByZeroError);
    }
}
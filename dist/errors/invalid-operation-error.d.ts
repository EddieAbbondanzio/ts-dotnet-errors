import { AbstractError } from "./abstract-error";
/**
 * Error thrown when a method call is invalid for the object's current state.
 */
export declare class InvalidOperationError extends AbstractError {
    /**
     * Create a new invalid operation error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error);
}

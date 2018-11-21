import { AbstractError } from "./abstract-error";
/**
 * Error thrown when a requested method or operation is not implemented.
 */
export declare class NotImplementedError extends AbstractError {
    /**
     * Create a new not implemented error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

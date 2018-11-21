import { AbstractError } from "./abstract-error";
/**
 * Error that is thrown when an I/O error occurs.
 */
export declare class IOError extends AbstractError {
    /**
     * Create a new IO error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

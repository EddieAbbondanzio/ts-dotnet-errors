import { AbstractError } from "./abstract-error";
/**
 * Error for when an argument provided to a method is not valid.
 */
export declare class ArgumentError extends AbstractError {
    /**
     * Create a new argument error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

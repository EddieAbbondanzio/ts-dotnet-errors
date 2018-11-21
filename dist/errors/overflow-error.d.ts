import { AbstractError } from "./abstract-error";
/**
 * Error thrown when an arithmetic, casting, or conversion operation
 * results in an overflow.
 */
export declare class OverflowError extends AbstractError {
    /**
     * Create a new divide by zero error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error);
}

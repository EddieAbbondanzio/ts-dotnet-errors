import { AbstractError } from "./abstract-error";
/**
 * Error thrown when an attempt is made to access an element of an
 * array or collection with an index that is outside its bounds.
 */
export declare class IndexOutOfRangeError extends AbstractError {
    /**
     * Create a new index out of range error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

import { AbstractError } from "./abstract-error";
/**
 * Error thrown when the value of an argument is outside the allowable
 * range of values as defined by the invoked method.
 */
export declare class ArgumentOutOfRangeError extends AbstractError {
    /**
     * Create a new argument out of range error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

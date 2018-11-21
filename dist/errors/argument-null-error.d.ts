import { AbstractError } from "./abstract-error";
/**
 * Error thrown when a null reference is passed to a method that
 * does not accept it as a valid argument.
 */
export declare class ArgumentNullError extends AbstractError {
    /**
     * Create a new null argument error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: Error);
}

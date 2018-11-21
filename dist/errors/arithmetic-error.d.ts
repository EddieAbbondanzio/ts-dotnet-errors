import { AbstractError } from "./abstract-error";
/**
 * Error thrown for errors in an arithmetic, casting, or conversion
 * operation.
 */
export declare class ArithmeticError extends AbstractError {
    /**
     * Create a new arithmetic error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

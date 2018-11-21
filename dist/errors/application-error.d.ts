import { AbstractError } from "./abstract-error";
/**
 * Serves as the base class for application-defined errors.
 */
export declare class ApplicationError extends AbstractError {
    /**
     * Create a new application error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

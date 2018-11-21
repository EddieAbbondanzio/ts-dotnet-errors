/**
 * Base class for all custom errors to derive from.
 */
export declare abstract class AbstractError extends Error {
    /**
     * The wrapped error contained within this one.
     */
    innerError?: AbstractError;
    /**
     * Create a new abstract error.
     * @param message The error message.
     * @param innerError The inner error.
     */
    constructor(message?: string, innerError?: AbstractError);
}

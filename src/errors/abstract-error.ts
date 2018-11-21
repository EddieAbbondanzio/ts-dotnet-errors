/**
 * Base class for all custom errors to derive from.
 */
export abstract class AbstractError extends Error {
    /**
     * The wrapped error contained within this one.
     */
    public innerError?: AbstractError;

    /**
     * Create a new abstract error.
     * @param message The error message.
     * @param innerError The inner error.
     */
    constructor(message?: string, innerError?: Error) {
        super(message);
        this.innerError = innerError;

        //For transpiling to es5 support.
        Object.setPrototypeOf(this, AbstractError.prototype);
    }
}
import { AbstractError } from "./abstract-error";
/**
 * Error thrown when there is an issue with the database.
 */
export declare class DatabaseError extends AbstractError {
    /**
     * Create a new database error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError);
}

import { AbstractError } from "./abstract-error";

/**
 * Error thrown when there is an issue with the database.
 */
export class DatabaseError extends AbstractError {
    /**
     * Create a new database error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError) {
        super(message || 'An error occured accessing the database.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, DatabaseError);
    }
}
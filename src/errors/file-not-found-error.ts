import { AbstractError } from "./abstract-error";

/**
 * Error thrown when an attempt to access a file that does not 
 * exist on disk fails.
 */
export class FileNotFoundError extends AbstractError {
    /**
     * Create a new file not found error.
     * @param message The error message.
     * @param innerError The inner exception.
     */
    constructor(message?: string, innerError?: AbstractError) {
        super(message || 'Unable to find the specified file.', innerError);
        
        //For transpiling to es5 support.
        Object.setPrototypeOf(this, FileNotFoundError);
    }
}
// errorHandler.js
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;

        // Capture the stack trace (excluding constructor)
        Error.captureStackTrace(this, this.constructor);
    }
}
const errorHandler = (err, req, res, next) => {
    // Default values for unknown errors
    let statusCode = 500;
    let message = 'Internal Server Error';

    // Check if the error is an instance of ApiError
    if (err instanceof ApiError) {
        statusCode = err.statusCode;
        message = err.message;
    }

    // Log the error stack trace (useful for debugging)
    console.error(err.stack);

    // Send the error response
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

export {errorHandler,ApiError}

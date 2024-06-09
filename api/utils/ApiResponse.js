// apiResponse.js
class ApiResponse {
    static success(res, data, message = 'Success', statusCode = 200) {
        return res.status(statusCode).json({
            status: 'success',
            statusCode,
            message,
            data,
        });
    }

    static error(res, message = 'Error', statusCode = 500, errors = null) {
        return res.status(statusCode).json({
            status: 'error',
            statusCode,
            message,
            errors,
        });
    }
}

export {ApiResponse};

class ApiError extends Error {
    statusCode: number;
    data: null | object;
    errors: string[];
    success: boolean;
    constructor(
        statusCode : number,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export default ApiError;
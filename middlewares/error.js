class ErrorHandler extends Error{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err,req,res,next)=>
{
    err.message = err.message || "Internal server error";
    err.statusCode = err.statstatusCodeuscode|| 500;

    if(err.name == "CaseError")
    {
        const message = `Resource not found,Invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }
    if(err.name == 11000)
    {
            const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
            err = new ErrorHandler(message,400);
    }
        if(err.name == "JsonWebTokenError")
        {
                const message = `Json WebToken is Invalid,Try again`;
                err = new ErrorHandler(message,400);
        }
            if(err.name == "TokenExpiredError")
        {
                    const message = `Json WebToken is expired,Try Again`;
                    err = new ErrorHandler(message,400);
        }
        return res.status(err.statusCode).json({
            success:false,
            message:err.message,
        });

};
export default ErrorHandler;

import { Request, Response, NextFunction } from 'express';

export const httpExceptionHandler = (error: unknown, request: Request, response: Response, next: NextFunction) => {
    const responseStatus = response.statusCode;
    const responseMessage = error instanceof Error ? error.message : 'Unknown Error';

    return response.status(responseStatus).send({
        message: responseMessage,
        error
    });
};

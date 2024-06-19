"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotFoundHandler = void 0;
function routeNotFoundHandler(req, res, next) {
    var error = new Error("Not found");
    logging.warning(error);
    return res.status(404).json({
        error: {
            message: error.message
        }
    });
}
exports.routeNotFoundHandler = routeNotFoundHandler;

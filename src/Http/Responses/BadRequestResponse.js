/**
 * Bad Request Response
 * @param res
 * @param message
 */
export default (res, message) => {
    res.status(400);
    res.json({
        success: false,
        message: message,
        error_code: 3,
        data: null
    });
}
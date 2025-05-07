const sendResponse = (res, {
    statusCode,
    message, 
    data, 
    dataLength
}) => {
    res.status(statusCode).json({
        status: statusCode >= 400 ? 'fail': 'success',
        requestedAt: new Date().toISOString(),
        message, 
        dataLength,
        data,
    })
}

export default sendResponse;
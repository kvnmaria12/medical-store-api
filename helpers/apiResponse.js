// apiResponse for Success 
exports.successResponse = (res, msg) => {
    const responseData = {
        Status: 1,
        Message: msg
    }
    return res.status(200).json(responseData);
}

// apiResponse with SuccessData
exports.successResponseWithData = (res, msg, data) => {
    const responseData = {
        Status: 1,
        Message: msg,
        Data: data
    }
    return res.status(200).json(responseData);
}

// apiResponse for serverSideError
exports.serverSideError = (res, msg) => {
    const responseData = {
        Status: 0,
        Message: msg
    }
    return res.status(500).json(responseData);
}

// apiResponse for ClientSideError
exports.clientSideErrorWithData = (res, msg, data) => {
    const responseData = {
        Status: 0,
        Message: msg,
        Data: data
    }
    return res.status(400).json(responseData);
}

// apiResponse for NotFoundResponse
exports.notFoundResponse = (res, msg) => {
    const responseData = {
        Status: 0,
        Message: msg
    }
    return res.status(404).json(responseData);
}

// apiResponse for unauthorizedError
exports.unauthorizedError = (res, msg) => {
    const responseData = {
        Status: 0,
        Message: msg
    }
    return res.status(401).json(responseData);
}

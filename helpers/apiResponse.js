
exports.successResponse = (res, msg) => {
    const responseData = {
        Status: 1,
        Message: msg
    }
    return res.status(200).json(responseData);
}

exports.successResponseWithData = (res, msg, data) => {
    const responseData = {
        Status: 1,
        Message: msg,
        Data: data
    }
    return res.status(200).json(responseData);
}

exports.serverSideError = (res, msg) => {
    const responseData = {
        Status: 0,
        Message: msg
    }
    return res.status(500).json(responseData);
}

exports.clientSideErrorWithData = (res, msg, data) => {
    const responseData = {
        Status: 0,
        Message: msg,
        Data: data
    }
    return res.status(400).json(responseData);
}

exports.notFoundResponse = (res, msg) => {
    const responseData = {
        Status: 0,
        Message: msg
    }
    return res.status(404).json(responseData);
}

exports.unauthorizedError = (res, msg) => {
    const responseData = {
        Status: 0,
        Message: msg
    }
    return res.status(401).json(responseData);
}
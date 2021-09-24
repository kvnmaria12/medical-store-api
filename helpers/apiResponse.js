exports.successResponse = (res, msg) => {
    const responseData = {
        status: 1,
        message: msg
    }
    return res.status(200).json(responseData);
}

exports.successResponseWithData = (res, msg, data) => {
    const responseData = {
        status: 1,
        message: msg,
        data: data
    }
    return res.status(200).json(responseData);
}
exports.serverSideError = (res, msg) => {
    const responseData = {
        status: 0,
        message: msg
    }
    return res.status(500).json(responseData);
}

exports.clientSideErrorWithData = (res, msg, data) => {
    const responseData = {
        status: 0,
        message: msg,
        data: data
    }
    return res.status(400).json(responseData);
}

exports.unauthorizedError = (res, msg) => {
    const responseData = {
        status: 0,
        message: msg
    }
    return res.status(401).json(responseData);
}

exports.notFoundResponse = (res, msg) => {
    const responseData = {
        status: 0,
        message: msg
    }
    return res.status(404).json(responseData);
}

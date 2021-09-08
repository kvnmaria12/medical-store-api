exports.successResponse = (res, msg) => {

    const responseData = {
        status: 1,
        Message: msg
    }
    res.status(200).json(responseData);
}

exports.successResponseWithData = (res, msg, data) => {

    const responseData = {
        status: 1,
        Message: msg,
        Data: data
    }
    res.status(200).json(responseData);
}

exports.notFoundResponse = (res, msg) => {

    const responseData = {
        status: 0,
        Message: msg
    }
    res.status(404).json(responseData);
}

exports.serverSideError = (res, msg) => {

    const responseData = {
        status: 0,
        Message: msg
    }
    res.status(500).json(responseData);
}

exports.clientSideErrorWithData = (res, msg, data) => {

    const responseData = {
        status: 0,
        Message: msg,
        Data: data
    }
    res.status(400).json(responseData);
}


exports.unauthorizedError = (res, msg) => {

    const data = {
        status: 0,
        Message: msg
    }
    res.status(401).json(data);
}

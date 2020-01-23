function HttpGET(endPointName, callBackFunction, callBackParameter, callBackErrorFunction, callBackErrorParameter) {
    var url = window.location.origin + domainPath + '/' + endPointName;
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);
    ajax.send();
    ajax.onload = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            let response = JSON.parse(ajax.responseText);
            if (typeof callBackFunction !== typeof undefined && callBackFunction !== null)
                callBackFunction(response, callBackParameter, ajax);
        }
        else {
            let errorResponse = JSON.parse(ajax.responseText);
            if (typeof callBackErrorFunction !== typeof undefined && callBackErrorFunction !== null)
                callBackErrorFunction(errorResponse, callBackErrorParameter, ajax);
        }
    };
};

function ResponseErrorHttpGET(errorResponse, callBackErrorParamater, ajaxResponse) {
    if (errorResponse.exceptionType.toLowerCase() == 'businessrulesexception')
        ShowModalError(errorResponse.message);
    else if (errorResponse.exceptionType.toLowerCase() == 'notfoundexception')
        ShowModalError(callBackErrorParamater === null || typeof callBackErrorParamater === typeof undefined ? errorResponse.message : callBackErrorParamater);
    else
        ShowModalError('Houve um erro! Por favor tente novamente.');

    var logName = ajaxResponse.statusText + ' ' + ajaxResponse.status;
    console.log(logName, errorResponse);
};
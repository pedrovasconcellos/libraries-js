function HttpPOST(endPointName, data, callBackFunction, callBackParameter, callBackErrorFunction, callBackErrorParameter) {
    var url = window.location.origin + domainPath + '/' + endPointName;
    var json = JSON.stringify(data);
    var ajax = new XMLHttpRequest();
    ajax.open('POST', url, true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(json);
    ajax.onload = function () {
        if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 201)) {
            let response = JSON.parse(ajax.responseText);
            if (typeof callBackFunction !== typeof undefined && callBackFunction !== null)
                callBackFunction(response, callBackParameter, ajax);
        }
        else {
            let errorResponse = JSON.parse(ajax.responseText);
            if (typeof callBackErrorFunction !== typeof undefined && callBackErrorFunction !== null)
                callBackErrorFunction(ajax, errorResponse, callBackErrorParameter);
        }
    };
};

const responseErrorHttpPOST = function (ajaxResponse, errorResponse) {
    if (errorResponse.exceptionType.toLowerCase() == 'businessrulesexception')
        ShowModalError(errorResponse.message);
    else
        ShowModalError('Houve um erro! Por favor tente novamente.');
    ShowScreenLoading(false);
    var logName = ajaxResponse.statusText + ' ' + ajaxResponse.status;
    console.log(logName, errorResponse);
};
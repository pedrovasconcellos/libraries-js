function HttpGETCreateOptions(domSelect, endPointName, callBackFunction, callBackParameter, callBackErrorFunction, callBackErrorParamater) {
    var url = window.location.origin + domainPath + '/' + endPointName;
    domSelect.innerHTML = '<option selected disabled="disabled"> </option>';
    let ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.send();
    ajax.onload = function () {
        if (ajax.readyState == 4 && ajax.status == 200)
        {
            let obj = JSON.parse(ajax.responseText);
            if (obj.length === 0) return;

            obj.forEach(element => {
                let option = document.createElement("option");
                option.value = element.id;
                option.text = element.description;
                domSelect.appendChild(option);
            });

            if (typeof callBackFunction !== typeof undefined && callBackFunction !== null)
                callBackFunction(callBackParameter);
        }
        else
        {
            domSelect.innerHTML = '';

            let errorResponse = JSON.parse(ajax.responseText);
            if (typeof callBackErrorFunction !== typeof undefined && callBackErrorFunction !== null)
                callBackErrorFunction(errorResponse, callBackErrorParamater, ajax);
        }
    };
};

function ResponseErrorHttpGETCreateOptions(errorResponse, callBackErrorParamater, ajaxResponse) {
    if (errorResponse.exceptionType.toLowerCase() == 'businessrulesexception')
        ShowModalError(errorResponse.message);
    else if (errorResponse.exceptionType.toLowerCase() == 'notfoundexception')
        ShowModalError(callBackErrorParamater === null || typeof callBackErrorParamater === typeof undefined ? errorResponse.message : callBackErrorParamater);
    else
        ShowModalError('Houve um erro! Por favor tente novamente.');

    var logName = ajaxResponse.statusText + ' ' + ajaxResponse.status;
    console.log(logName, errorResponse);
};
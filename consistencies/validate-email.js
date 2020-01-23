function TheInputContainAnyElementsInTheList(inputStr, validStrList) {
    let result = false;
    validStrList.forEach(x => {
        if (inputStr.toLowerCase().match(x) !== null) result = true;
        if (inputStr[inputStr.length - 1].toLowerCase() !== x[x.length - 1].toLowerCase()) result = false;
        if (inputStr[0] === '@') result = false;
        if (result) validStrList.length = 0;
    });
    return result;
};

function IsValidEmail(email, emailList) {
    if (email === '') return false;
    let validEmailList = emailList;
    if (validEmailList == null) return true;
    if (validEmailList === null || validEmailList.length === 0 || validEmailList === '') return true;
    if (email !== null && typeof email !== typeof undefined)
        return TheInputContainAnyElementsInTheList(email, validEmailList);
    else return false;
};

const changeCallValidDomainEmailAjax = (event) => {
    let inputEmail = event.target;
    if (inputEmail === null || inputEmail.value === '') return;

    let ajax = new XMLHttpRequest();
    ajax.open("GET", window.location.origin + domainPath + '/Support/DomainEmails/' + accessToken, true);
    ajax.send();
    ajax.onload = function () {
        if (ajax.readyState != 4 && ajax.status != 200) return;
        let data = ajax.responseText;
        try {
            let domainEmails = JSON.parse(data);
            if (domainEmails.length === 0) return;

            let isValid = IsValidEmail(inputEmail.value, domainEmails);
            let inputEmailWarning = document.getElementById(inputEmail.id + '-warning');
            if (!isValid) inputEmailWarning.style.display = 'block';
            else inputEmailWarning.style.display = 'none';
        }
        catch (e) {

        };
    };
};



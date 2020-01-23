const focusoutValidateCNPJ = (event) => {
    let dom = event.target;
    let domWarning = document.getElementById(dom.id + '-warning');
    if (ValidateCNPJ(dom.value))
        domWarning.style.display = 'none';
    else
        domWarning.style.display = 'block';
};

function SetCNPJScreen(labelName, inputName, labelCpfCnpj, inputCpfCnpj, warning) {
    labelName.textContent = 'Razão Social *';
    labelName.setAttribute('title', 'CNPJ');
    labelName.setAttribute('data-title', 'CNPJ');
    inputName.setAttribute('maxlength', '150');
    inputName.setAttribute('pattern', '.{5,150}');
    inputName.setAttribute('title', 'o campo deve conter entre 5 a 150 caracteres.');

    labelCpfCnpj.textContent = 'CNPJ *';
    inputCpfCnpj.setAttribute('maxlength', '18');
    inputCpfCnpj.setAttribute('pattern', '.{18,18}');
    inputCpfCnpj.setAttribute('title', 'o campo deve conter 18 caracteres.');
    inputCpfCnpj.addEventListener('keydown', keydownEnforceFormatNumeric);
    inputCpfCnpj.addEventListener('keyup', keyupFormatToCNPJ);
    inputCpfCnpj.addEventListener('focusout', focusoutValidateCNPJ);
    warning.innerText = 'CNPJ inválido.';
};

function ValidateCNPJ(cnpj) {
    if (cnpj === null || cnpj === '')
        return false;

    if (cnpj.length !== 14)
        cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14 ||
        cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    let size = cnpj.length - 2
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let sum = 0;
    let pos = size - 7;
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
            pos = 9;
    };

    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(0))
        return false;

    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
            pos = 9;
    };

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(1))
        return false;

    return true;
};
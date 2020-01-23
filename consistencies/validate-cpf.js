const focusoutValidateCPF = (event) => {
    let dom = event.target;
    let domWarning = document.getElementById(dom.id + '-warning');
    if (ValidateCPF(dom.value))
        domWarning.style.display = 'none';
    else
        domWarning.style.display = 'block';
};

function SetCPFScreen(labelName, inputName, labelCpfCnpj, inputCpfCnpj, warning) {
    labelName.textContent = 'Nome *';
    labelName.setAttribute('title', 'CPF');
    labelName.setAttribute('data-title', 'CPF');
    inputName.setAttribute('maxlength', '80');
    inputName.setAttribute('pattern', '.{3,80}');
    inputName.setAttribute('title', 'o campo deve conter entre 3 a 80 caracteres.');

    labelCpfCnpj.textContent = 'CPF *';
    inputCpfCnpj.setAttribute('maxlength', '14');
    inputCpfCnpj.setAttribute('pattern', '.{14,14}');
    inputCpfCnpj.setAttribute('title', 'o campo deve conter 14 caracteres.');
    inputCpfCnpj.addEventListener('keydown', keydownEnforceFormatNumeric);
    inputCpfCnpj.addEventListener('keyup', keyupFormatToCPF);
    inputCpfCnpj.addEventListener('focusout', focusoutValidateCPF);
    warning.innerText = 'CPF inválido.';
};

function ValidateCPF(cpf) {
    if (cpf === null || cpf === '')
        return false;

    if (cpf.length != 11)
        cpf = cpf.replace(/[^\d]+/g, '');
	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    let sum = 0;
    for (let i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);

    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11)
        rest = 0;

    if (rest != parseInt(cpf.substring(9, 10)))
        return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);

    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11)
        rest = 0;

    if (rest != parseInt(cpf.substring(10, 11)))
        return false;

    return true;
};
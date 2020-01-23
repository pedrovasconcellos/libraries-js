function isModifierKey(event) {
    let key = event.keyCode;
    return (key === 8 || key === 9 || key === 13 || key === 46) || (key > 36 && key < 41);
};

function isNumericInput(event) {
    let key = event.keyCode;
    return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)) ||
        (
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        );
};

const keydownEnforceFormatNumeric = (event) => {
    if (!isNumericInput(event) && !isModifierKey(event))
        event.preventDefault();
};

const keydownEnforceFormatNumericOrPressEnterToBlur = (event) => {
    keydownEnforceFormatNumeric(event);
    if (event.keyCode === 13) {
        event.target.blur();
    };
};

const keyupOnlyNumber = (event) => {
    let target = event.target;
    target.value = target.value.replace(/\D/g, '');
};

function isLetterInput(event) {
    let key = event.keyCode;
    return (key >= 65 && key <= 90);
};

const keydownEnforceFormatLetter = (event) => {
    if (!isLetterInput(event) && !isModifierKey(event))
        event.preventDefault();
};

const keydownBlockControlV = (event) => {
    var tecla = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && tecla == 'v') {
        if (window.event)
            event.returnValue = false;
        else
            event.preventDefault();
    };
};

const keyupOnlyNumberOrLetter = (event) => {
    let target = event.target;
    target.value = target.value.replace(/[^a-zA-Z0-9]/gi, '');
};

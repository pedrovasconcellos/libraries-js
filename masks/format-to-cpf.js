const keyupFormatToCPF = (event) => {
    if (isModifierKey(event)) return;
    event.target.value = FormatToCpf(event.target.value);
};

function FormatToCpf(cpf) {
    let str = cpf.replace(/\D/g, '').substring(0, 11);
    let first = str.substring(0, 3);
    let second = str.substring(3, 6);
    let third = str.substring(6, 9);
    let digit = str.substring(9, 11);

    if (str.length > 9) { return `${first}.${second}.${third}-${digit}`; }
    else if (str.length > 6) { return `${first}.${second}.${third}`; }
    else if (str.length > 3) { return `${first}.${second}`; }
    else { return `${first}`; }
};
const keyupFormatToCNPJ = (event) => {
    if (isModifierKey(event)) return;
    event.target.value = FormatToCNPJ(event.target.value);
};

function FormatToCNPJ(cnpj) {
    let str = cnpj.replace(/\D/g, '').substring(0, 14);
    let first = str.substring(0, 2);
    let second = str.substring(2, 5);
    let third = str.substring(5, 8);
    let fourth = str.substring(8, 12);
    let fifth = str.substring(12, 14);

    if (str.length > 12) { return `${first}.${second}.${third}/${fourth}-${fifth}`; }
    else if (str.length > 8) { return `${first}.${second}.${third}/${fourth}`; }
    else if (str.length > 5) { return `${first}.${second}.${third}`; }
    else if (str.length > 2) { return `${first}.${second}`; }
    else { return `${first}`; }
};
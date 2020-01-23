function RemoveAccents(text) {
    return text
        .replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
        .replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
        .replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
        .replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
        .replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
        .replace(new RegExp('[Ç]', 'gi'), 'c');
};

function AddZeroLeft(str, length) {
    let remaining = length - String(str).length;
    return '0'.repeat(remaining > 0 ? remaining : '0') + str;
};
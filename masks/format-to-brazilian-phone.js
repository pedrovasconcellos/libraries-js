const keyupFormatToBrazilianPhone = (event) => {
    if (isModifierKey(event)) return;
    let target = event.target;

    let stringInput = target.value.match(/\d+/g);
    if (stringInput === null) return;
    let index = (stringInput.join([]).length < 11 ? 1 : 0);

    let input = target.value.replace(/\D/g, '').substring(0, 11 - index);
    let zip = input.substring(0, 2);
    let middle = input.substring(2, 7 - index);
    let last = input.substring(7 - index, 11 - index);

    if (input.length > 7 - index) { target.value = `(${zip}) ${middle}-${last}`; }
    else if (input.length > 2) { target.value = `(${zip}) ${middle}`; }
    else if (input.length > 0) { target.value = `(${zip}`; }
};
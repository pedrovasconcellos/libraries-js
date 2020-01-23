const keyupFormatToDateddMMyyyy = (event) => {
    if (isModifierKey(event)) return;

    let target = event.target;
    let input = target.value.replace(/\D/g, '').substring(0, 9);
    let day = input.substring(0, 2);
    let month = input.substring(2, 4);
    let year = input.substring(4, 9);

    if (input.length > 4) { target.value = `${day}/${month}/${year}`; }
    else if (input.length > 2) { target.value = `${day}/${month}`; }
    else if (input.length > 0) { target.value = `${day}`; }
};
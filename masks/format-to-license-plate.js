const keyupFormatToLicensePlate = (event) => {
    if (isModifierKey(event)) return;

    let target = event.target;
    target.value = target.value.toUpperCase();
    let value = target.value.replace(/[^a-zA-Z0-9]/gi, '').substring(0, 7);

    let first = value.substring(0, 3).replace(/\d/g, '');

    let aux = value.substring(3, 4).replace(/\D/g, '');
    let aux2 = value.substring(4, 5);
    let aux3 = value.substring(5, 7).replace(/\D/g, '');
    let second = aux + aux2 + aux3;

    if (value.length > 3) { target.value = `${first}-${second}`; }
    else { target.value = `${first}`; }
};
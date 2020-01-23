function FormatBrMoney(number, hasR$) {
    var response = number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    response = response.replace(/\ /g, '');
    if (hasR$ === false)
        response = response.substring(2, response.length);
    return response;
};

function FormatBrMoneyToNumber(numberStr) {
    var number = numberStr.replace(/\./g, '').replace(',', '.');
    return Number.parseFloat(number);
}

const keyupFormatBrMoney = (event) => {
    var target = event.target;
    var value = target.value.replace(/,/g, '').replace(/\./g, '');
    var result = '';
    if (value.length === 2) {
        result = value.substring(0, value.length - 1) + ',' + value.substring(value.length - 1, value.length);
        target.value = result;
        return;
    };
    if (value.length < 3) return;
    result = value.substring(0, value.length - 2) + ',' + value.substring(value.length - 2, value.length);
    if (result.length >= 7 && result.length < 10) {
        let index = result.length - 7;
        result = result.substring(0, 1 + index) + '.' + result.substring(1 + index, 7) + result.substring(7, result.length);
        target.value = result;
        return;
    };
    if (result.length >= 10 && result.length < 13) {
        let index = result.length - 10;
        result = result.substring(0, 1 + index) + '.' + result.substring(1 + index, 4 + index) + '.' + result.substring(4 + index, result.length);
        target.value = result;
        return;
    };
    if (result.length >= 13 && result.length < 16) {
        let index = result.length - 13;
        result = result.substring(0, 1 + index) + '.' + result.substring(1 + index, 4 + index) + '.' + result.substring(4 + index, 7 + index) + '.' + result.substring(7 + index, result.length);
        target.value = result;
        return;
    };
    if (result.length >= 16) {
        target.value = '0';
        return;
    };
    target.value = result;
};
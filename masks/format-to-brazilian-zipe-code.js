const keyupFormatToBrazilianZipeCode = (event) => {
    let target = event.target;
    let cep = target.value.replace(/\D/g, '').substring(0, 9);
    target.value = cep.replace(/D/g, "").replace(/^(\d{5})(\d)/, "$1-$2");
}
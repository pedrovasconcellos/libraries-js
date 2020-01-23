function ValidateFile(domInput, warningFunction, allowedFileSizeInMB, arrayAllowedExtension) {

    if (!ValidateFileSize(domInput, allowedFileSizeInMB)) {
        warningFunction('Arquivo excede ' + allowedFileSizeInMB + ' MB.');
        return false;
    };

    if (!ValidateAllowedFileExtensions(domInput, arrayAllowedExtension)) {
        warningFunction('Serão permitidos apenas os arquivos de extensão: .' + arrayAllowedExtension.join(', .'));
        return false;
    };

    return true;
};

function ValidateFileSize(domInput, allowedFileSizeInMB) {
    let fileSize = domInput.files[0].size / 1024 / 1024;
    if (fileSize > allowedFileSizeInMB)
        return false;
    else
        return true;
};

function ValidateAllowedFileExtensions(domInput, arrayAllowedExtension) {
    let fileExtension = domInput.value.split('.').pop().toLowerCase();

    for (let index in arrayAllowedExtension) {
        if (fileExtension === arrayAllowedExtension[index]) {
            return true;
        };
    };
    return false
};
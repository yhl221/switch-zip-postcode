'use strict';
const allDigit = require('../spec/fixture.js');

function printBarcodes(inputs) {
    const allDigitCodes = allDigit.loadAllDigits();
    const legalCode = buildLegalCode(inputs);
    const digitBarcodes = buildDigitBarcodes(legalCode, allDigitCodes);
    const stringBarcode = concatBarcodes(digitBarcodes);
    console.log(stringBarcode);

}

function buildLegalCode(inputs) {
    let legalCode = '';
    const length = inputs.length;
    if (length == 5 || length == 9 || length == 10) {
        const digitsArray = inputs.split('-');
        if (digitsArray.length <= 2) {
            for (const digit of digitsArray) {
                legalCode += digit;
            }
        }
    }

    return legalCode;
}

function getCheckCode(digits) {
    const sum = digits.map(digit=>parseInt(digit)).reduce((a, b)=>a + b);
    return sum % 10 === 0 ? 0 + '' : 10 - sum % 10;
}

function buildDigitBarcodes(legalCode, allDigitCodes) {
    const digitBarcodes = [];
    let digitArray = legalCode.split('');
    digitArray.push(getCheckCode(digitArray));
    
    digitArray.forEach((key)=> {
        let barcode = allDigitCodes.find(digitCode=>key === digitCode.key);
        digitBarcodes.push(barcode.barcode);
    });

    return digitBarcodes;
}

function concatBarcodes(digitBarcodes) {
    const nar = digitBarcodes.reduce((pre, next)=> {
        return pre + next;
    });
    return `|${nar}|`;
}

module.exports = {
    buildLegalCode: buildLegalCode,
    printBarcodes: printBarcodes,
    buildDigitBarcodes: buildDigitBarcodes,
    concatBarcodes: concatBarcodes
};
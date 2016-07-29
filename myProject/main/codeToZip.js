'use strict';
const allDigit = require('../spec/fixture.js');

function printZip(code) {
    
    const allDigitCodes = allDigit.loadAllDigits();
    const barcode = buildBarcode(code);
    const digitCode = buildDigitCode(barcode, allDigitCodes);
    const codes = buildCode(digitCode);

    console.log(codes);
}

function buildBarcode(code) {
    const barcode = [];
    let sliceBarcode = code.slice(1, code.length - 1);
    
    for (let pos = 0; pos < sliceBarcode.length; pos = pos + 5) {
      const  slice = sliceBarcode.slice(pos, pos + 5);
        barcode.push(slice);
    }

    return barcode;
}

function buildDigitCode(barcode, allDigitCodes) {
    const digitCodes = [];
    for (const b of barcode) {
        allDigitCodes.forEach((object)=> {
            if (b === object.barcode) {
                digitCodes.push(object.key);
            }
        });
    }
    
    return digitCodes;
}

function buildCode(digitCode) {
    let codes = '';
    digitCode.forEach((digit)=> {
        codes += digit;
    });
    let sum = digitCode.map(digit=>parseInt(digit)).reduce((a, b)=>a + b);
    if (sum % 10 == 0)
        return codes.slice(0, codes.length - 1);
}

module.exports = {
    printZip: printZip,
    buildBarcode: buildBarcode,
    buildDigitCode: buildDigitCode,
    buildCode: buildCode
};
'use strict';
function loadAllDigits() {
    return [
        {key:'1',barcode:':::||'},
        {key:'2',barcode: '::|:|'},
        {key:'3',barcode: '::||:'},
        {key:'4',barcode: ':|::|'},
        {key:'5',barcode: ':|:|:'},
        {key:'6',barcode: ':||::'},
        {key:'7',barcode: '|:::|'},
        {key:'8',barcode: '|::|:'},
        {key:'9',barcode: '|:|::'},
        {key:'0',barcode: '||:::'}
    ];
}

exports.loadAllDigits=loadAllDigits;
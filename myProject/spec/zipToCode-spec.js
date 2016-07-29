'use strict';
const postBarcode = require('../main/zipToCodes.js');
const allDigit = require('./fixture.js');

describe('switchCode', ()=> {
    
    
    const inputs = '45056-1234';
    
    const legalBarcode = '450561234';
    
    const digitBarcode = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::',
        ':::||', '::|:|', '::||:', ':|::|', '||:::'];
    
    const allDigitCodes = allDigit.loadAllDigits();
    
    it('print barcodes', ()=> {
        
        spyOn(console, 'log');
        postBarcode.printBarcodes(inputs);
        const expectBarcodes = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

        expect(console.log).toHaveBeenCalledWith(expectBarcodes);
    });

    it('print legalCode', ()=> {
        const legalCode = postBarcode.buildLegalCode(inputs);
        const expectCode = '450561234';

        expect(legalCode).toEqual(expectCode);
    });

    it('print digitBarcodes', ()=> {
        const digitBarcodes = postBarcode.buildDigitBarcodes(legalBarcode, allDigitCodes);
        const expectDigitBarcodes = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::',
                                     ':::||', '::|:|', '::||:', ':|::|', '||:::'];

        expect(digitBarcodes).toEqual(expectDigitBarcodes);
    });

    it('print stringBarcode', ()=> {
        const stringBarcode = postBarcode.concatBarcodes(digitBarcode);
        const expectString = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

        expect(stringBarcode).toEqual(expectString);
    })
});

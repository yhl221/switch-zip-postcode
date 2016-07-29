'use strict';
const codeToZip = require('../main/codeToZip');
const allDigit=require('./fixture.js');

describe('codeToZip',()=>{
    const code='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    
    const barcodes=[':|::|',':|:|:','||:::', ':|:|:',':||::',
        ':::||','::|:|','::||:', ':|::|','||:::'];
    
    const digitCode=['4','5','0','5','6','1','2','3','4','0'];
    
    const allDigitCodes=allDigit.loadAllDigits();
    
    it('print zip',()=>{
        spyOn(console,'log');
        codeToZip.printZip(code);
        const expectZip='450561234';

        expect(console.log).toHaveBeenCalledWith(expectZip);
    });
    
    it('print barcodes',()=>{
        const barcode = codeToZip.buildBarcode(code);
        const expectBarcode=[':|::|',':|:|:','||:::', ':|:|:',':||::', 
                              ':::||','::|:|','::||:', ':|::|','||:::'];
        
        expect(barcode).toEqual(expectBarcode);
    });

    it('print digitZip',()=>{
        const digitCode=codeToZip.buildDigitCode(barcodes,allDigitCodes);
        const expectDigitCode=['4','5','0','5','6','1','2','3','4','0'];

        expect(digitCode).toEqual(expectDigitCode);
    });
    
    it('print code',()=>{
        const code=codeToZip.buildCode(digitCode);
        const expectCode = '450561234';

        expect(code).toEqual(expectCode);
    });
});
import { TitleCasePipe } from "./title-case.pipe"

describe('TitleCasePipe', () => {
    let titleCasePipe: TitleCasePipe;
    beforeEach(() => {
        titleCasePipe = new TitleCasePipe();
    });

    it('Pipe should convert abc to Abc', () => {
        expect(titleCasePipe.transform('abc')).toEqual('Abc');
    });

    it('Pipe should convert `abc def` to `Abc Def`', () => {
        expect(titleCasePipe.transform('abc def')).toEqual('Abc Def');
    });

})
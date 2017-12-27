import {
    getRefLink,
} from './render';

test('getRefLink', () => {
    const ref = '#/foo/bla';
    const expected = '[_bla_](#/foo/bla)';
    
    const result = getRefLink(ref);

    expect(result).toBe(expected);
})
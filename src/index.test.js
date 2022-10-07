import {
    check
} from './index';

test('if check provides sum of two arguments', () => {
    expect(check(1,3)).toBe(4);
});
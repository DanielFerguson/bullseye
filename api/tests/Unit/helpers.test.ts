import { expect, test } from '@jest/globals';
import { stringIsUuid } from '../../src/helpers';

test('stringIsUuid works as expected', () => {
    const workingTest1 = "40c287e2-c657-45be-880b-e713cf9012e5";
    const workingTest2 = "cc6321e8-87bd-4d65-bb5e-824ae883de7a";

    expect(stringIsUuid(workingTest1)).toBe(true);
    expect(stringIsUuid(workingTest2)).toBe(true);

    const failing1 = "cc6321e8-87bd-4d65-bb5e-824ae883de";
    const failing2 = "6321e8-87bd-4d65-bb5e-824ae883de7a";
    const failing3 = "abcdefgh";

    expect(stringIsUuid(failing1)).toBe(false);
    expect(stringIsUuid(failing2)).toBe(false);
    expect(stringIsUuid(failing3)).toBe(false);
});

import { Main } from '../src/passwordChecker.js';

describe('tests for a Password Checker', function() {
    const main = new Main();

    it('should return false if the password contains 0 character', function() {
       
        const result = main.passwordChecker('');

        expect(result).toBe(false);
    });

    it('should return true if the password contains 8 characters', function() {

        const result = main.passwordChecker('P@ssw0or');

        expect(result).toBe(true);
    });

    it('should return true if the password contains 9 characters', function() {

        const result = main.passwordChecker('P@ssw0ord');

        expect(result).toBe(true);
    });
});

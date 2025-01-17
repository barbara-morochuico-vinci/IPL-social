import { Main } from '../src/passwordChecker.js';

describe('tests for a Password Checker', function() {
    const main = new Main();

    it('the function should return false if the password contains 0 character', function() {
       
        const result = main.passwordChecker('');

        expect(result).toBe(false);
    });

    it('the function should return true if the password contains 8 characters', function() {

        const result = main.passwordChecker('P@ssw0or');

        expect(result).toBe(true);
    });

    it('the function should return true if the password contains 9 characters', function() {

        const result = main.passwordChecker('P@ssw0ord');

        expect(result).toBe(true);
    });

    it('the function should return true if the password contains 10 characters', function() {

        const result = main.passwordChecker('P@ssw0ordd');

        expect(result).toBe(true);
    });

    it('the function should return true if the password contains the number 0 and is longer than 8 characters', function() {

        const result = main.passwordChecker('P@sswoo0rdd');

        expect(result).toBe(true);
    });

    it('the function should return true if the password contains the number 1 and is longer than 8 characters', function() {

        const result = main.passwordChecker('P@sswoo1rdd');

        expect(result).toBe(true);
    });

    it('the function should return true if the password contains the number 2 and is longer than 8 characters', function() {

        const result = main.passwordChecker('P@sswoo2rdd');

        expect(result).toBe(true);
    });

    it('the function should return false if the password contains ipl and meets the other criteria', function() {

        const result = main.passwordChecker('P@ssw_ipl_oo2rdd');

        expect(result).toBe(false);
    });

    it('the function should return false if the password contains IPL and meets the other criteria', function() {

        const result = main.passwordChecker('P@ssw_IPL_oo2rdd');

        expect(result).toBe(false);
    });

    it('the function should return false if the password contains iPl and meets the other criteria', function() {

        const result = main.passwordChecker('P@ssw_iPl_oo2rdd');

        expect(result).toBe(false);
    });

    it('the function should return true if the password contains and @ and meets the other criteria', function() {

        const result = main.passwordChecker('P@sswoooo2rdd');

        expect(result).toBe(true);
    });

    it('the function should return false if the password doesn t contain any special character and meets the other criteria', function() {

        const result = main.passwordChecker('Paaaasswoooo2rdd');

        expect(result).toBe(false);
    });

});

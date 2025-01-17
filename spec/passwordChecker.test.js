import { Main } from '../src/passwordChecker.js';

describe('tests for a Password Checker', function() {
    it('should return false if the password contains 0 character', function() {
        //arrange
        const main = new Main();
        
        //act
        const result = main.passwordChecker('');

        //assert
        expect(result).toBe(false);
    });
});

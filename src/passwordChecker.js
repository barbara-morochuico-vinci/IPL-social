export class Main {
    passwordChecker(password) {
        if(password.length === 8 || password.length === 9) return true;

       return false;
    }
}
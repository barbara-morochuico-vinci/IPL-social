export class Main {
    passwordChecker(password) {
        if(isLongerThan8(password) && ((/0/.test(password)) || /1/.test(password))) return true;

        return false;
    }
}

function isLongerThan8(password) {
    return password.length >= 8;
}

export class Main {
    passwordChecker(password) {
        if(isLongerThan8(password) && containsNumber(password) && !containsIpl(password) )  return true;

        return false;
    }
}

function containsIpl(password) {
    return /ipl/i.test(password);
}

function containsNumber(password) {
    return /\d/.test(password);
}

function isLongerThan8(password) {
    return password.length >= 8;
}

export class Main {
    passwordChecker(password) {
        if(isLongerThan8(password) && /\d/.test(password) && !/ipl/i.test(password) )  return true;

        return false;
    }
}

function isLongerThan8(password) {
    return password.length >= 8;
}

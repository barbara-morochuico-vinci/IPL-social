export class Main {
    passwordChecker(password) {
        if(isLongerThan8(password) && /\d/.test(password) && !password.includes("ipl") && !password.includes("IPL") )  return true;

        return false;
    }
}

function isLongerThan8(password) {
    return password.length >= 8;
}

export class Main {
    passwordChecker(password) {
        if(password.includes("ipl")) return false;
        if(isLongerThan8(password) && /\d/.test(password)) return true;

        return false;
    }
}

function isLongerThan8(password) {
    return password.length >= 8;
}

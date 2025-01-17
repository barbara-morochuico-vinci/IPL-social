export class Main {
    passwordChecker(password) {
        if(!isLongerThan8(password)) return false;
        if(!containsNumber(password)) return false;
        if(containsIpl(password)) return false;
        if(!containsSpecialCharacter(password)) return false;
        
        return true;
    }
}

function containsSpecialCharacter(password) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
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

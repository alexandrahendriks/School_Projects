const passwords = ["henkie1" , "1234a", "z", "henkie1234", "HENKhenk", "HENK33$", "1234"];

let password;
//2. Password is not null!
const isNotNull = password => password !== null;
//1. Password is shorter than 9 characters!
const isShorter = password => 
    isNotNull(password) && password.length <= 8;
//3. Password has 1 or more uppercase characters
const hasUpperCase = password => 
    isNotNull(password) && password.toLowerCase() !== password;
//4. Password has 1 or more lowercase characters - ALWAYS TRUE!
const hasLowerCase = password => 
    isNotNull(password) && password.toUpperCase() !== password;
//5. Password has 1 or more digits
const hasDigit = password => /\d/.test(password);

//A password is only approved if: At least 3 of the above conditions are true
const criteriums = conditions => {
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >=3;
} 

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        isShorter(password),
        hasUpperCase(password),
        hasLowerCase(password),
        hasDigit(password),
    ]
    const result = criteriums(conditions) && hasLowerCase(password);
    return result;
}

module.exports = {
    verifyPassword,
    isNotNull,
    isShorter,
    hasUpperCase, 
    hasLowerCase,
    hasDigit,
    criteriums,
};
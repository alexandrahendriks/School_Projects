const {
    verifyPassword,
    isNotNull, 
    isShorter, 
    hasUpperCase, 
    hasLowerCase, 
    hasDigit,
    criteriums, 
} = require("./functions");

test("Password is not null ", () => {
    expect(isNotNull("henkie1")).not.toBe(null); // not to be null
})
test("Password is not null ", () => {
    expect(isNotNull("1234a")).not.toBe(null); // not to be null
})
test("Password is not null ", () => {
    expect(isNotNull("z")).not.toBe(null); // not to be null
})
test("Password is not null ", () => {
    expect(isNotNull("henkie1234")).not.toBe(null); // not to be null
})
test("Password is not null ", () => {
    expect(isNotNull("HENKhenk")).not.toBe(null); // not to be null
})
test("Password is not null ", () => {
    expect(isNotNull("HENK33$")).not.toBe(null); // not to be null
})
test("Password is not null ", () => {
    expect(isNotNull("1234")).not.toBe(null); // not to be null
})

test("Does password has less than 9 characters ", () => {
    expect(isShorter("henkie1")).toBe(true);  //shorter than 9 characters
});
test("Does password has less than 9 characters ", () => {
    expect(isShorter("1234a")).toBe(true);  //shorter than 9 characters
});
test("Does password has less than 9 characters ", () => {
    expect(isShorter("z")).toBe(true);  //shorter than 9 characters
});
test("Does password has less than 9 characters ", () => {
    expect(isShorter("henkie1234")).toBe(true);  //shorter than 9 characters
});
test("Does password has less than 9 characters ", () => {
    expect(isShorter("HENKhenk")).toBe(true);  //shorter than 9 characters
});
test("Does password has less than 9 characters ", () => {
    expect(isShorter("HENK33$")).toBe(true);  //shorter than 9 characters
});
test("Does password has less than 9 characters ", () => {
    expect(isShorter("1234")).toBe(true);  //shorter than 9 characters
});


test("Has at least 1 uppercase character ", () => {
    expect(hasUpperCase("henkie1")).toBe(true);  //has at least 1 uppercase
});
test("Has at least 1 uppercase character ", () => {
    expect(hasUpperCase("1234a")).toBe(true);  //has at least 1 uppercase
});
test("Has at least 1 uppercase character ", () => {
    expect(hasUpperCase("z")).toBe(true);  //has at least 1 uppercase
});
test("Has at least 1 uppercase character ", () => {
    expect(hasUpperCase("henkie1234")).toBe(true);  //has at least 1 uppercase
});
test("Has at least 1 uppercase character ", () => {
    expect(hasUpperCase("HENKhenk")).toBe(true);  //has at least 1 uppercase
});
test("Has at least 1 uppercase character ", () => {
    expect(hasUpperCase("HENK33$")).toBe(true);  //has at least 1 uppercase
});
test("Has at least 1 uppercase character ", () => {
    expect(hasUpperCase("1234")).toBe(true);  //has at least 1 uppercase
});

test("Has at least 1 lowercase character ", () => {
    expect(hasLowerCase("henkie1")).toBe(true);  //ALWAYS HAS TO BE TRUE
});
test("Has at least 1 lowercase character ", () => {
    expect(hasLowerCase("1234a")).toBe(true);  //ALWAYS HAS TO BE TRUE
});
test("Has at least 1 lowercase character ", () => {
    expect(hasLowerCase("z")).toBe(true);  //ALWAYS HAS TO BE TRUE
});
test("Has at least 1 lowercase character ", () => {
    expect(hasLowerCase("henkie1234")).toBe(true);  //ALWAYS HAS TO BE TRUE
});
test("Has at least 1 lowercase character ", () => {
    expect(hasLowerCase("HENKhenk")).toBe(true);  //ALWAYS HAS TO BE TRUE
});
test("Has at least 1 lowercase character ", () => {
    expect(hasLowerCase("HENK33$")).toBe(true);  //ALWAYS HAS TO BE TRUE
});
test("Has at least 1 lowercase character ", () => {
    expect(hasLowerCase("1234")).toBe(true);  //ALWAYS HAS TO BE TRUE
});

test("Has at least 1 digit in it ", () => {
    expect(hasDigit("henkie1")).toBe(true);  //has atleast 1 digit
});
test("Has at least 1 digit in it ", () => {
    expect(hasDigit("1234a")).toBe(true);  //has atleast 1 digit
});
test("Has at least 1 digit in it ", () => {
    expect(hasDigit("z")).toBe(true);  //has atleast 1 digit
});
test("Has at least 1 digit in it ", () => {
    expect(hasDigit("henkie1234")).toBe(true);  //has atleast 1 digit
});
test("Has at least 1 digit in it ", () => {
    expect(hasDigit("HENKhenk")).toBe(true);  //has atleast 1 digit
});
test("Has at least 1 digit in it ", () => {
    expect(hasDigit("HENK33$")).toBe(true);  //has atleast 1 digit
});
test("Has at least 1 digit in it ", () => {
    expect(hasDigit("1234")).toBe(true);  //has atleast 1 digit
});

describe("Check combination of conditions", () => {
    test("minimum conditions, all conditions false", () => {
        const conditions = [false, false, false, false, false];
        expect(criteriums(conditions)).toBe(false);
    });
    test("minimum conditions, all conditions false", () => {
        const conditions = [false, false, false, false, false];
        expect(criteriums(conditions)).toBe(false);
    });
    test("minimum conditions, conditions under cutoff", () => {
        const conditions = [true, true, false, false, false];
        expect(criteriums(conditions)).toBe(false);
    });
    test("minimum conditions, conditions on cutoff", () => {
        const conditions = [true, true, true, false, false];
        expect(criteriums(conditions)).toBe(true);
    });
    test("minimum conditions, conditions above cutoff", () => {
        const conditions = [true, true, true, true, false];
        expect(criteriums(conditions)).toBe(true);
    });
    test("minimum conditions, all conditions true", () => {
        const conditions = [true, true, true, true, true];
        expect(criteriums(conditions)).toBe(true);
    });
})

describe("Verify password" , () => {
    test("Verify Password null", () => {
        expect(verifyPassword(null)).toBe(false);
    })
    test("Verify Password '1'", () => {
        expect(verifyPassword("1")).toBe(false);
    })
    test("Verify Password only digits", () => {
        expect(verifyPassword("123456789")).toBe(false);
    })
    test("Verify Password only uppercase", () => {
        expect(verifyPassword("ABC")).toBe(false);
    })
    test("Verify Password only lowercase", () => {
        expect(verifyPassword("abc")).toBe(true);
    })
    test("Verify Password only lower case but too long", () => {
        expect(verifyPassword("abcdefghi")).toBe(false);
    })
    test("Verify Password correct password", () => {
        expect(verifyPassword("Ab")).toBe(true);
    })
    test("Verify Password correct password", () => {
        expect(verifyPassword("Ab1")).toBe(true);
    })
})


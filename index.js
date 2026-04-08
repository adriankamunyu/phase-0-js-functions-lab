




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
    return amount*0.1;
}

console.log(calculateTax(100))

function convertToUpperCase(text) {
    return text.toUpperCase();
}

console.log(convertToUpperCase('april'))

function findMaximum (num1,num2) {
    if (num1>num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(findMaximum(4,5))

function isPalindrome (word) {
    if (word = isPalindrome) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("Hannah"))

function calculateDiscountedPrice(originalPrice,discountedPercentage) {
    return originalPrice*discountedPercentage/100;
}

console.log(calculateDiscountedPrice(150,10))

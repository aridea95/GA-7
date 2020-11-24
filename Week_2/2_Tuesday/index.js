//1. Find the Faktor Persekutuan terbesar
function fpb(number1, number2) {
    var temp = 0;
    let small = Math.min(number1, number2);
    // if (number1 > number2) { small = number2 }
    for (var i = 1; i < small; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            temp = i;
        }
    }
    return temp;
}

//Test
console.log(fpb(30, 50)) //10
console.log(fpb(12, 15)) //3
console.log(fpb(17, 35)) //1

//2. Print the n first Prime numbers

function checkPrime(number) {
    //code here
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function print(n) {
    //code here
    let i = 1;
    let j = 1;
    let array = "";
    if (n < 1) {
        return "1";
    }
    while (i <= n) {
        if (checkPrime(j)) {
            i++;
            array += `${j} `;
        }
        j++;
    }
    return array;
}

//Test Case
console.log(print(3)); //2 3 5
console.log(print(5)); //2 3 5 7 11 
console.log(print(0)); //1

  
//3. Find the Mean of given Array

function mean(array) {
    //code here
    let temp = 0;
    for (let i of array) {
        temp += i;
    }
    return (temp / array.length).toFixed(2);
}

//Test 
console.log(mean([1, 2, 3, 4, 5])) //3
console.log(mean([3.7, 5.3, 7.0, 1.9, 3.1, 0.5, 1.5])) //3.28 -> 2 angka di blkg

 //4. check XO 
function checkXO(string) {
    //code here
    let x = 0;
    let o = 0;
    for (let i of string) {
        if (i == "x") {
            x++;
        } else {
            o++;
        }
    }
    if (x == o) {
        return 1;
    } else {
        return -1;
    }
}

//Test
console.log(checkXO('xxxxxooooo')) //1
console.log(checkXO('xxxooooo')) //-1

//5. Encrypt the string
// Rules : swap the letter, after the letter itself.
// Example : "wow" -> //xpx
// after letter w is x, after letter o is p, and so on.

function swap(string) {
    //code here
    let encrypt = "";
    for (let i = 0; i < string.length; i++) {
        let ascii = 0;
        ascii = string.charCodeAt(i);
        encrypt += String.fromCharCode(ascii + 1);
    }
    return encrypt;
}

//Test
console.log(swap("wow")); //xpx
console.log(swap("javascript")); //kbwbtdsjqu
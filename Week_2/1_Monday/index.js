  //1. Check odd or even number
const checkNumber = (number) => {
    let check;
    number % 2 === 0 ?
        check = "Even" : check = "Odd";
    return `${number} = ${check}`;
}

//Test Case
//Input 5 -> Output Odd
//Input 10 -> Output Even
console.log(checkNumber(5));
console.log(checkNumber(10));


//2. Print the n first numbers
const checkKelipatan = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} kelipatan 3 dan 5`);
        } else if (i % 3 === 0) {
            console.log(`${i} kelipatan 3`);
        } else if (i % 5 === 0) {
            console.log(`${i} kelipatan 5`)
        } else {
            console.log(`${i}`);
        }
    }
}

//Test Case
checkKelipatan(15);
//Input 15
/*Output
1
2
3 kelipatan 3
4
5 kelipatan 5
6 kelipatan 3
7
8
9 kelipatan 3
10 kelipatan 5
    .
    .
    .
15 kelipatan 3 dan 5 */

//3. Print Segitiga
const segitiga = (number) => {
    for (let i = 1; i <= number; i++) {
        let temp = "";
        for (let j = 1; j <= i; j++) {
            temp += "*";
        }
        console.log(temp);
    }
    console.log("")
}

//Input 3
//Output
// *
// **
// ***

segitiga(3);

// 5
//Output
//  *
//  **
//  ***
//  ****
//  *****

segitiga(5);

//4. Split words without function .split(" ")
var string = "Lorem ipsum is dummy text";

// Using For

const forSplitWords = (array) => {
    let word = "";
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == " ") {
            tempArray.push(word);
            word = "";
        }
        word += array[i];
    }
    return tempArray;
};


// Using While

const whileSplitWords = (array) => {
    let i = 0;
    let word = "";
    let tempArray = [];
    while (i < array.length) {
        if (array[i] == " ") {
            tempArray.push(word);
            word = "";
        }
        word += array[i];
        i++;
    }
    return tempArray;
};

// Output
// ["Lorem", "ipsum", "is", "dummy", "text"]

// console.log(forSplitWords(string));
console.log(whileSplitWords(string));

//5. Find the faktorial
const factorial = (number) => {
    let total = 1;
    let str = `${number}! = `;
    for (let i = number; i > 0; i--) {
        str += i;
        if (i != 1) {
            str += ".";
        }
        total *= i;
    }
    return `${str} = ${total}`;
};

//Faktorial 
// 3! = 3.2.1 = 6
console.log(factorial(3));

//Input 5
//Output
// 5.4.3.2.1 = 120
console.log(factorial(5));
// 1. convert minutes to time

function convertMinute(minute){
    var min = minute % 60;
    var hour = (minute - min) / 60;
    return `${hour} : ${min}`
}

//Test Case
console.log(convertMinute(100)) //1:40
console.log(convertMinute(185)) //3:05

//2. Sort the letters
function sortLetter(str){
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

//Test Case
sortLetter("hello"); //ehllo

//3. A random color
 //Global
 
 function randomColor(){
    const colors = ['red','green','blue']
     let random = Math.random();
     if(random < 0.34){
         random = colors[0];
     } else if(random >= 0.34 && random < 0.67) {
         random = colors[1];
     } else {
         random = colors[2];
     }
     
     return random;
 }
 
 //Test Case
 console.log(randomColor()); //Output -> Color : red

 //4. Split words without function .split(" ") and find the max
 var string = "Lorem ipsum is dummy text"
    
 // Using For
function maxWordLength(){
var temp = [];
var word = "";
var lgth = 0;
var longest;

for(let i=0;i<string.length;i++){
    if(string[i] !== " "){
        word += string[i];
    }
    else{
        temp.push(word);
        word = "";
    }

    if(i === string.length - 1){
        temp.push(word);
    }
}
for(var j=0; j < temp.length; j++){
    if(temp[j].length > lgth){
        var lgth = temp[j].length;
        longest = temp[j];
    }      
} 
return longest;
}

//  // Using While
//  function maxWordLength(){
     
//  }
 
 // Test Case
//  console.log(maxWordLength(string)); //Lorem

// 5. Count the vowel
// Count the vowels and turn into object

const vowelsObject = (apaja) => {
    let object = {
        a: 0,
        i: 0,
        u: 0,
        e: 0,
        o: 0
    };

    for (let letter of apaja) {
        switch (letter) {
            case 'a':
                object.a++;
                break;
            case 'i':
                object.i++;
                break;
            case 'u':
                object.u++;
                break;
            case 'e':
                object.e++;
                break;
            case 'o':
                object.o++;
                break;
            default:
                break;
        }
    }
    return object;
}

// function countVoewl(apaja) {

// }

//Test Case
console.log(vowelsObject("rum raisin chocolate ice cream"));
/*
    {
        a : 3,
        i : 3,
        u : 1,
        e : 3,
        o : 2
    }
*/

// var books = [
//     {title: "Javascript for Dummy",
//      author: "Don Norman",
//      hasRead: false
//     },
//     {title: "Python for Data Science",
//     author: "Brian Christian",
//     hasRead: true
//     },
//     {title: "Java Algorithm and Data Structures",
//     author: "John Carlo",
//     hasRead: true
//     },
//     {title: "Java for Professional",
//     author: "Michael Kick",
//     hasRead: false
//     }];
    
//repl compulsary

// function showBooks(books) {
//     let result ={
//         title: [],
//         author: []
//     }
//     books.forEach(el =>  {
//         result.title.push(el.title)
//         result.author.push(el.author)
//     })
//     return result;
// }
// console.log(showBooks(books));

// repl advance

//   function checkBooks() {
//      let result = {
//         done: [],
//         undone:[]
//      }
//     books.forEach(el => {
//         if (el.hasRead === true) {
//         result.done.push(el)
//     } else {
//         result.undone.push(el)
//     }
//     })

//       console.log("==== books ====")
//       return result;
//   }

//   console.log(checkBooks());
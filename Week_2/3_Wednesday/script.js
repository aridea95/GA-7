var income = [{
    id : 1,
    title : 'Salary Income',
    type : 'Income',
    total : 5000000
}];

readIncome();

//create object from input data
function createObject(titleVal, typeVal, totalVal) {
    var temp = {
        id : generateId() + 1,
        title : titleVal,
        type : typeVal,
        total : totalVal
    }
    return temp;
}

//create id auto
function generateId() {
    var lengthIncome = income.length;
    var id = income[lengthIncome-1].id;

    return id;
}

function submitHandler() {
    //get DOM
    var incomeVal = document.getElementById('title').value;
    var TypeVal = document.getElementById('type').value;
    var totalVal = document.getElementById('total').value;
    
    addIncome(titleVal, typeVal, totalVal);
    readIncome();

    var incomeVal = document.getElementById('title').value = "";
    var TypeVal = document.getElementById('type').value = "";
    var totalVal = document.getElementById('total').value = "";

    return false;
}

function readIncome() {
    //get DOM
    var incomeData = document.getElementById('incomeval');
    incomeData.innerHTML ="";
    
    //looping get task and show in html
    for(let i = 0; i < income.length; i++) {
    let taskHTML = `<p> ${income[i].id}. ${income[i].title}, ${income[i].type}, ${income[i].total}`

    incomeData.insertAdjacentHTML('beforeend', taskHTML);
    }
}

//push to income var
function addIncome(titleVal, typeVal, totalVal) {
    var data = createObject(titleVal, typeVal, totalVal);
    console.log(data);
    income.push(data);
    console.log(`"${titleVal.title}" has been added!`);
}
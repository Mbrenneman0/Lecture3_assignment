/*
table 8
Steve Ingraham
Michael Brenneman
*/

const prompt = require("prompt-sync")();

// exercise 1

function minimumTwo(a, b)
{
    if(a < b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
// Hello Collin
// I am sleeping
// Hello class
// Hi, we are mot interested in this lecture


function sleeping(name, sleeper, month)
{
    console.log(`Hello ${name}`);
    console.log(`${sleeper} is sleeping`);
    if(month === "September")
    {
        console.log("Wake me up when semptember ends");
    }
    return "Goodnight";
}


function minimumThree(a, b, c)
{
    let minimum = a;
    if( b < minimum)
    {
        minimum = b;
    }
    if( c < minimum)
    {
        minimum = c;
    }
    return minimum;
}

console.log("exercise 1");
console.log("two numbers");
console.log(`The minimum of those two numbers is ${
    minimumTwo(Number(prompt("Enter the first number: ")), Number(prompt("Enter the second number: ")))}`);

console.log("Three numbers")
console.log(`The minimum of those three numbers is ${
    minimumThree(Number(prompt("Enter the first number: ")), Number(prompt("Enter the second number: ")), Number(prompt("Enter the third number: ")))}`);


// exercise 2

console.log("exercise 2");

let isEven = (num) => {
    if (num === 0) {

        return true

    }

    else if (num === 1) {

        return false

    }
    else {

       return isEven(num - 2)

    }

}

let oddOrEven = Number(prompt("Enter a number to check for odd or even: "));

if(isEven(oddOrEven))
{
    console.log(`${oddOrEven} is even`);
}
else
{
    console.log(`${oddOrEven} is odd`);
}

// exercise 3

console.log("exercise 3");

function additiveSeries(n)
{
    let temp = 2;
    for(let iter = 0; iter < n; iter++)
    {
        temp += 4*iter;
    }
    return temp;
}
function multSeries(n)
{
    let temp = 1;
    for(let iter = 1; iter <=n; iter++)
    {
        temp *= iter;
    }
    return temp;
}
function fibSeries(n)
{
    if(n <= 1)
    {
        return n
    }
    else
    {
        return fibSeries(n-1)+fibSeries(n-2);
    }
}

console.log("Series: 2, 6, 14, 26, 42");
console.log(additiveSeries(Number(prompt("Enter 'n' to find the 'n'th number of the series: "))));

console.log("Series: 1, 2, 6, 24, 120, 720");
console.log(multSeries(Number(prompt("Enter 'n' to find the 'n'th number of the series: "))));

console.log("Series: 1, 1, 2, 3, 5, 8, 13");
console.log(fibSeries(Number(prompt("Enter 'n' to find the 'n'th number of the series: "))));

// exercise 4

console.log("exercise 4");

const operations = [
  { name: "Addition", func: (a, b) => a + b },
  { name: "Subtraction", func: (a, b) => a - b },
  { name: "Multiplication", func: (a, b) => a * b },
  { name: "Division", func: (a, b) => a / b }
]


let func = () => {
    let temp
    let selection
    console.log(`
Please choose an option:
________________________
1. Additon
2. Subtraction 
3. Multiplication 
4. Division 
5. Exit
_________________________

`);

    let op = Number(prompt(`>`));


    if (op === 5) {
        return
    }
    else if (op >= 1 && op <= 4) {
    selection = op
    while(true){
        int1 = Number(prompt("Enter your first number:  "))
        int2 = Number(prompt("Enter your second number:  "))
        if (!isNaN(int1) && !isNaN(int2)) {
            break;
        }
        else{
            console.log("Try again: ")
        }
    }
    temp = operations[selection - 1]
            console.log(temp.func(int1, int2))
            func()
    }
    else{
        console.log("Try again: ");
        func();
    }
}

func()

// exercise 5

console.log("exercise 5");

function multTable(x, a, b)
{
    for(a; a<=b; a++)
    {
        console.log(`${x} x ${a} = ${x*a}`);
    }
}

while(true)
{
    let x = Number(prompt("Enter a number to find the multiplaction table of: "));
    if(isNaN(x))
    {
        console.log("ERROR: That is not a number!");
        break;
    }
    let a = Number(prompt("Enter a number to start the table: "));
    if(isNaN(a))
    {
        console.log("ERROR: That is not a number!");
        break;
    }
    let b = Number(prompt("Enter a number to end the table: "));
    if(isNaN(b))
    {
        console.log("ERROR: That is not a number!");
        break;
    }

    multTable(x,a,b);
}

//exercise 6

console.log("exercise 6");

function multipleMultTable(x, y, a, b)
{
    for(x; x<=y; x++)
    {
        multTable(x,a,b);
        console.log("\n\n");
    }
}

while(true)
    {
        let x = Number(prompt("Enter a number to find the first multiplaction table of: "));
        if(isNaN(x))
        {
            console.log("ERROR: That is not a number!");
            break;
        }
        let y = Number(prompt("Enter a number to find the last multiplaction table of: "));
        if(isNaN(y))
        {
            console.log("ERROR: That is not a number!");
            break;
        }
        let a = Number(prompt("Enter a number to start the table: "));
        if(isNaN(a))
        {
            console.log("ERROR: That is not a number!");
            break;
        }
        let b = Number(prompt("Enter a number to end the table: "));
        if(isNaN(b))
        {
            console.log("ERROR: That is not a number!");
            break;
        }

        multipleMultTable(x,y,a,b);
    }

var questions = [
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName;",
        opt2: "let variableName;",
        opt3: "const variableName;",
        opt4: "All of the above;",
        ans: "All of the above;"
    },
    {
        question: "Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        opt3: "()",
        opt4: "< >",
        ans: "{}"
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger()",
        opt3: "parseNumber()",
        opt4: "parseFloat()",
        ans: "parseInt()"
    },
    {
        question: "Which keyword is used to check if a property exists in an object?",
        opt1: "exists",
        opt2: "in",
        opt3: "has",
        opt4: "includes",
        ans: "in"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        opt1: "It refers to the current object.",
        opt2: "It refers to the previous object.",
        opt3: "It refers to the parent object.",
        opt4: "It refers to the global object.",
        ans: "It refers to the current object."
    },
    {
        question: "How do you add a comment in JavaScript?",
        opt1: "// This is a comment",
        opt2: "' This is a comment",
        opt3: "# This is a comment",
        opt4: "<!-- This is a comment -->",
        ans: "// This is a comment"
    },
    {
        question: "Which JavaScript function is used to write content into an HTML document?",
        opt1: "document.write()",
        opt2: "document.create()",
        opt3: "document.add()",
        opt4: "document.output()",
        ans: "document.write()"
    },
    {
        question: "Which method is used to access an HTML element by its ID?",
        opt1: "getElementById()",
        opt2: "querySelector()",
        opt3: "getElement()",
        opt4: "getById()",
        ans: "getElementById()"
    },
    {
        question: "Which method is used to add a new element at the end of an array?",
        opt1: "push()",
        opt2: "pop()",
        opt3: "shift()",
        opt4: "unshift()",
        ans: "push()"
    },
    {
        question: "What is the output of 'typeof null' in JavaScript?",
        opt1: "'null'",
        opt2: "'object'",
        opt3: "'undefined'",
        opt4: "'number'",
        ans: "'object'"
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        opt1: "=",
        opt2: "==",
        opt3: "===",
        opt4: "!=",
        ans: "="
    },
    {
        question: "How do you create a function in JavaScript?",
        opt1: "function myFunction() {}",
        opt2: "def myFunction() {}",
        opt3: "func myFunction() {}",
        opt4: "create myFunction() {}",
        ans: "function myFunction() {}"
    },
    {
        question: "Which method is used to join two or more arrays in JavaScript?",
        opt1: "concat()",
        opt2: "combine()",
        opt3: "merge()",
        opt4: "join()",
        ans: "concat()"
    },
    {
        question: "Which of the following is a looping structure in JavaScript?",
        opt1: "for",
        opt2: "while",
        opt3: "do...while",
        opt4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which function is used to execute a function after a set amount of time?",
        opt1: "setTimeout()",
        opt2: "setInterval()",
        opt3: "setTime()",
        opt4: "delay()",
        ans: "setTimeout()"
    },
    {
        question: "Which method is used to remove the last element from an array?",
        opt1: "pop()",
        opt2: "push()",
        opt3: "shift()",
        opt4: "splice()",
        ans: "pop()"
    },
    {
        question: "How can you convert a string to uppercase in JavaScript?",
        opt1: "toUpperCase()",
        opt2: "upper()",
        opt3: "toCaps()",
        opt4: "toUpper()",
        ans: "toUpperCase()"
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        opt1: "==",
        opt2: "=",
        opt3: "===",
        opt4: "!=",
        ans: "==="
    },
    {
        question: "How can you add an element to the beginning of an array in JavaScript?",
        opt1: "unshift()",
        opt2: "shift()",
        opt3: "push()",
        opt4: "pop()",
        ans: "unshift()"
    },
    {
        question: "Which method is used to select all elements with a specific class?",
        opt1: "getElementsByClassName()",
        opt2: "getElementsByTagName()",
        opt3: "getElementById()",
        opt4: "querySelector()",
        ans: "getElementsByClassName()"
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        opt1: "Number",
        opt2: "String",
        opt3: "Boolean",
        opt4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "How do you check if a variable 'x' is not equal to 5 in JavaScript?",
        opt1: "x != 5",
        opt2: "x == 5",
        opt3: "x !== 5",
        opt4: "x <> 5",
        ans: "x != 5"
    },
    {
        question: "Which of the following is the correct way to create a class in JavaScript?",
        opt1: "class MyClass {}",
        opt2: "function MyClass() {}",
        opt3: "createClass MyClass() {}",
        opt4: "MyClass = new Class()",
        ans: "class MyClass {}"
    }
];


var index = 0;
function renderQues(){
    var container = document.getElementById("container")
    var option = document.getElementsByName("option")

    container.innerHTML = `
    <p class = "container">
    ${questions[index].question}</p>
    <div><label for=""><input type="radio" name="option" value="${questions[index].opt1}">${questions[index].opt1}</label></div>
    <div><label for=""><input type="radio" name="option" id="">${questions[index].opt2}</label></div>
    <div><label for=""><input type="radio" name="option" id="">${questions[index].opt3}</label></div>
    <div><label for=""><input type="radio" name="option" id="">${questions[index].opt4}</label></div>`
    index++
}

renderQues()
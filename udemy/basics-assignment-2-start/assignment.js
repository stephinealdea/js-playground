const task3Element = document.getElementById('task-3');

/*
Create two new functions: One that takes no parameters and simply shows
        an <code>alert()</code> with some text of your choice and one that
        receives a name as a parameter and then uses <code>alert()</code> to
        output that name.
*/
function showMessage() {
  alert('This is a function');
}

function showName(name) {
  alert('Hello ' + name);
}

// Call both functions directly from your code.
showMessage();
showName('Stephine');

/*
Add an event listener to <code>task3Element</code> and attach it to the
        first function (the one without arguments). Click this task thereafter
        to verify whether it works.
*/
task3Element.addEventListener('click', showMessage);

/*
Add a brand-new function that takes three parameters (three strings,
        give them any names you want) that returns one combined string (where the
        three strings are concatenated).
*/

function combinedString(str1, str2, str3) {
  return `${str1} ${str2} ${str3}`;
}

/*
 Call that new function directly from your code and
        <code>alert()</code> the result of that function.
*/
const result = combinedString('This ', 'is ', 'combined!');
alert(result);


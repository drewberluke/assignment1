//Andrew Luke
//Jan 19 2020

//set the html buttons as variables for onclick functions
var submit = document.getElementById('submit');
var clear = document.getElementById('clear');

//calculate grades function
submit.addEventListener('click', function () {
    //declare variables, pull info needed from the DOM
    let assignments = document.getElementById('assignments').value;
    let group = document.getElementById('group').value;
    let quizzes = document.getElementById('quizzes').value;
    let exams = document.getElementById('exams').value;
    let intex = document.getElementById('intex').value;
    let finalPct = 0;
    let finalLetter = '';
    let salutation = ''

    //calculate the final pct
    finalPct = ((assignments * .5) + (group * .1) + (quizzes * .1) + (exams * .2) + (intex * .1));

    //determine the letter grade earned and its corresponding salutation
    if (finalPct >= .94) {
        finalLetter = 'an A!';
        salutation = 'Congratulations!:D';
    } else if (finalPct >= .9) {
        finalLetter = 'an A-!';
        salutation = 'Congrats!';
    } else if (finalPct >= .87) {
        finalLetter = 'a B+!';
        salutation = 'Good work!!';
    } else if (finalPct >= .84) {
        finalLetter = 'a B';
        salutation = 'Good work!';
    } else if (finalPct >= .8) {
        finalLetter = 'a bB-';
        salutation = 'Not too bad';
    } else if (finalPct >= .77) {
        finalLetter = 'a C+';
        salutation = 'Still passing!';
    } else if (finalPct >= .74) {
        finalLetter = 'a C';
        salutation = 'Close call!';
    } else if (finalPct >= .7) {
        finalLetter = 'a C-';
        salutation = 'Could be better';
    } else if (finalPct >= .67) {
        finalLetter = 'a D+';
        salutation = 'Uh oh...';
    } else if (finalPct >= .64) {
        finalLetter = 'a D';
        salutation = 'Next time for sure!';
    } else if (finalPct >= .6) {
        finalLetter = 'a D-';
        salutation = 'Darn...';
    } else if (finalPct >= .50) {
        finalLetter = 'an E';
        salutation = 'Sorry:(';
    } else {
        finalLetter = 'an E ... What are you even doing with your life?';
        salutation = 'Ooops...';
    };

    //correct the final pct for output
    finalPct = finalPct * 100;
    finalPct = Number.parseFloat(finalPct).toFixed(2);

    //change display of output field to visible and display results
    document.getElementById('outputBox').style.display = ''
    document.getElementById('salutation').innerHTML = salutation
    document.getElementById('pct').innerHTML = finalPct + '%'
    document.getElementById('letter').innerHTML = finalLetter
});

//function to reload page to clear the output 
clear.addEventListener('click', function () {
    location.reload();
});
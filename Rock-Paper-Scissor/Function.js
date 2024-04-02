// // const randomNumber = Math.random();
// // console.log(randomNumber);
// var ComputerMove ;
// var randomNumber = Math.random();

// if (randomNumber >= 0 && randomNumber < 1/3 ) {
    
//     ComputerMove = "Rock"
// }
// else if (randomNumber >= 1/3 && randomNumber < 2/3){
    
//     ComputerMove = "Paper"
// }
// else if (randomNumber >= 2/3 && randomNumber < 1){
    
//     ComputerMove = "Scissor"
// }
// let Result = ''

// const Rock = document.querySelector('.Rock');

// const Paper = document.querySelector('.Paper');

// const Scissor = document.querySelector('.Scissor');
// Rock.addEventListener('click' , ()=> {
//         if (ComputerMove === 'Rock') {
//             alert('you picked Rock where computer also picked Rock . Tie')
//         }
//         else if (ComputerMove === 'Paper'){
//             alert('You picked Rock where computer picked Paper . You Lose');
//         }
//         else if(ComputerMove === 'Scissor'){
//             alert('You picked Rock where computer picked Scissor . You Win');
//         }
// } );

// Paper.addEventListener('click' , ()=> {
//     if (ComputerMove === 'Paper') {
//         alert('you picked Paper where computer also picked Paper . Tie');
//     }
//     else if (ComputerMove === 'Rock'){
//         alert('You picked paper where computer picked Rock . You Win');
//     }
//     else if(ComputerMove === 'Scissor'){
//         alert('You picked Paper where computer picked Scissor . You lose');
//     }
// } )

// Scissor.addEventListener('click' , ()=> {
//     if (ComputerMove === 'Paper') {
//         alert('you picked Scissor where computer also picked Paper . You  Win');
//     }
//     else if (ComputerMove === 'Rock'){
//         alert('You picked Scissor where computer picked Rock . You Lose');
//     }
//     else if(ComputerMove === 'Scissor'){
//         alert('You picked Scissor where computer picked Scissor . Tie');
//     }
// } );


// var ComputerMove; // Declare ComputerMove outside event listeners

// const Rock = document.querySelector('.Rock');
// const Paper = document.querySelector('.Paper');
// const Scissor = document.querySelector('.Scissor');

// Rock.addEventListener('click', () => {
//     const randomNumber = Math.random();
//     if (randomNumber >= 0 && randomNumber < 1/3) {
//         ComputerMove = 'Rock';
//     } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
//         ComputerMove = 'Paper';
//     } else {
//         ComputerMove = 'Scissor';
//     }
//     // Now check the result against the user's choice and display the outcome
//     // based on ComputerMove and the user's choice (Rock).
// });

// Paper.addEventListener('click', () => {
//     const randomNumber = Math.random();
//     if (randomNumber >= 2/3 && randomNumber < 1) {
//         ComputerMove = 'Rock';
//     } else if (randomNumber < 2/3) {
//         ComputerMove = 'Paper';
//     } else {
//         ComputerMove = 'Scissor';
//     }
//     // Now check the result against the user's choice and display the outcome
//     // based on ComputerMove and the user's choice (Paper).
// });

// Scissor.addEventListener('click', () => {
//     const randomNumber = Math.random();
//     if (randomNumber < 1/3) {
//         ComputerMove = 'Rock';
//     } else if (randomNumber < 2/3) {
//         ComputerMove = 'Paper';
//     } else {
//         ComputerMove = 'Scissor';
//     }
//     // Now check the result against the user's choice and display the outcome
//     // based on ComputerMove and the user's choice (Scissor).
// });




let ComputerMove;

const Rock = document.querySelector('.Rock');
const Paper = document.querySelector('.Paper');
const Scissor = document.querySelector('.Scissor');

Rock.addEventListener('click', () => {
    generateComputerMove();
    checkResult('Rock');
});

Paper.addEventListener('click', () => {
    generateComputerMove();
    checkResult('Paper');
});

Scissor.addEventListener('click', () => {
    generateComputerMove();
    checkResult('Scissor');
});

function generateComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
        ComputerMove = 'Rock';
    } else if (randomNumber < 2/3) {
        ComputerMove = 'Paper';
    } else {
        ComputerMove = 'Scissor';
    }
}

function checkResult(userChoice) {
    let result;
    if (userChoice === ComputerMove) {
        result = 'Tie';
    } else if ((userChoice === 'Rock' && ComputerMove === 'Scissor') ||
               (userChoice === 'Paper' && ComputerMove === 'Rock') ||
               (userChoice === 'Scissor' && ComputerMove === 'Paper')) {
        result = 'You Win';
    } else {
        result = 'You Lose';
    }
    alert(result);
}

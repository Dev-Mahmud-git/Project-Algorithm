

    

// function newFunction() {
//     var randomNumber = Math.random();

//     var computerMove;

//     var userSelection;

//     const Rock = document.querySelector('.Rock');
//     const Paper = document.querySelector('.Paper');
//     const Scissor = document.querySelector('.Scissor');



//     if (randomNumber <= 0 && randomNumber < 1 / 3) {
//         computerMove = 'Rock';
//     }

//     else if (randomNumber <= 1 / 3 && randomNumber > 2 / 3) {
//         computerMove = 'Paper';
//     }

//     else if (randomNumber <= 2 / 3 && randomNumber > 1) {
//         computerMove = 'Scissor';
//     }


//     Rock.addEventListener('click', () => {

//         userSelection = 'Rock';
//         checkResult();
//     });

//     Paper.addEventListener('click', () => {

//         userSelection = 'Paper';

//         checkResult();
//     });

//     Scissor.addEventListener('click', () => {

//         userSelection = 'Scissor';
//         checkResult();


//     });

//     // if ( userSelection === 'Rock' && computerMove === 'Rock') {
//     //     alert('You seleted Rock and Computer selected Rock . Tie');
//     // }
//     // else if (userSelection === 'Paper' && computerMove === 'Paper'){
//     //     alert('You seleted Paper and Computer selected Paper . Tie');
//     // }
//     // else if (userSelection === 'Rock' && computerMove === 'Paper'){
//     //     alert('You seleted Rock and Computer selected Paper . You Lose');
//     // }
//     // else if (userSelection === 'Rock' && computerMove === 'Scissor'){
//     //     alert('You seleted Rock and Computer selected Scissor . You Win');
//     // }
//     // else if (userSelection === 'Paper' && computerMove === 'Rock'){
//     //     alert('You seleted Paper and Computer selected Rock . You Win');
//     // }
//     // else if (userSelection === 'Paper' && computerMove === 'Scissor'){
//     //     alert('You seleted Paper and Computer selected Scissor . You Lose');
//     // }
//     // else if (userSelection === 'Scissor' && computerMove === 'Rock'){
//     //     alert('You seleted Scissor and Computer selected Rock . You Lose');
//     // }
//     // else if (userSelection === 'Scissor' && computerMove === 'Paper'){
//     //     alert('You seleted Scissor and Computer selected Paper . You Win');
//     // }
//     // else if (userSelection === 'Paper' && computerMove === 'Scissor'){
//     //     alert('You seleted Paper and Computer selected Scissor . You Lose');
//     // }
//     if (userSelection === computerMove) {

//         alert('Tie . You Both chose ' + computerMove);
//     }
//     else if ((userSelection === 'Rock' && computerMove === 'Scissor') ||
//         (userSelection === 'Paper' && computerMove === 'Rock') ||
//         (userSelection === 'Scissor' && computerMove === 'Paper')) {
//     }
//     else {
//         alert(' You Lose ! Computer Selected ' + computerMove);
//     }
// }


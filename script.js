const myArray = ['Rock', 'Paper', 'Scissors'];
function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)]
}


console.log(computerPlay(myArray))
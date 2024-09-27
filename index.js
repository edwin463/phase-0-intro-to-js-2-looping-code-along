// Code your solutions in this file





// Function that returns an array of thank you messages
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// Function that counts down from a given number to zero and logs each number
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}


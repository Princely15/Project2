const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const shiftValue = 3

function encrypt(message, shiftValue) {
    let encryptMess = "";
    let counter = 0
    for (let i = 0; i < message.length; i++ ) {
        const char = message[i];
        if(char.toLowerCase() !== char.toUpperCase()) {
            // Making sure that the letters turn equal to each other
            const isUppercase = char === char.toUpperCase();
            const baseCode = isUppercase ? "A".charCodeAt(0) : "a".charCodeAt(0)
            const charPosition = char.charCodeAt(0) - baseCode; 
            console.log(`
            Input Character is ${char} - Basecode is: ${baseCode} ASCII Char Code is ${char.charCodeAt(0)} and its position in the alphabet is ${charPosition}.`
            );
            const newCode = (charPosition + shiftValue + 26) % 26;
            console.log (`New Char is: ${String.fromCharCode(baseCode + newCode)}`)
            const encrypted = String.fromCharCode(baseCode + newCode)
            encryptMess += encrypted;
        }
        else {
            console.log ('Non alphabet character, adding on ' + char);
            encryptMess += char
        };
        counter++;

        // check if two insertions
        if (counter === 2) {
            const indexOfLet = Math.floor(Math.random() * 26);
            const randomChar = alphabet[indexOfLet];
            encryptMess += randomChar;
            counter === 0;
        }
    }
    return encryptMess; 
}
console.log(encrypt('xy!z@', 3));

// Made a function for encryption
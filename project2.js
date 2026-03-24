
// Keeps loop within the alphabet const
function normalizeShift(shiftValue) {
    return ((shiftValue % 26) + 26) % 26
}
// Recognizes upper case and lowercase for translation
function shiftChar(char, normalizedShiftValue) {

    const isUppercase = char === char.toUpperCase();
    const baseCode = isUppercase ? "A".charCodeAt(0) : "a".charCodeAt(0)
    const charPosition = char.charCodeAt(0) - baseCode; 
    const newCode = (charPosition + normalizedShiftValue + 26) % 26;
    const newChar = String.fromCharCode(baseCode + newCode)
    return newChar
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const shiftValue = 3


//fully encrypts the code inputted
function encrypt(message, shiftValue) {
    console.log('Encrypting...')
    const normalizedShiftValue = normalizeShift(shiftValue)
    // console.log ("Normalized Shift " + normalizedShiftValue);
    let encryptMess = "";
    let counter = 0
    for (let i = 0; i < message.length; i++ ) {
        const char = message[i];


        if(char.toLowerCase() !== char.toUpperCase()) {
         
            const newChar = shiftChar(char, normalizedShiftValue)
            encryptMess += newChar;
        }
        else {
            // console.log ('Non alphabet character, adding on ' + char);
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


// fully decrypts the message inputted
function decrypt (encryptMess, shiftValue) {
    const normalizedShiftValue = normalizeShift(-shiftValue);
    console.log('Decrypting...')

    let decryptMess = "";
    let counter = 0;

    for (let i = 0; i < encryptMess.length; i++){
        const char = encryptMess[i];
        // Skip third character random addition
        if (counter === 2 ) {
            counter = 0;
            continue;
        }

        if (char.toLowerCase() !== char.toUpperCase()) {

            const decryptedChar = shiftChar(char, normalizedShiftValue);
            console.log ("Decrypted Val: " + decryptedChar);
            decryptMess += decryptedChar;

        }
        else {
            decryptMess += char; 
        }
        counter++;
    }

    return decryptMess
}





console.log(encrypt('ABC', 3));
const encryptedVal = encrypt('ABC', 3)
console.log(decrypt(encryptedVal, 3));

// Made a function for encryption


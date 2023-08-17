const fs = require("fs");

function xorSingleByteKey(hexString, key) {
    const buffer = Buffer.from(hexString, "hex");
    const outPutBuffer = Buffer.alloc(buffer.length);

    for(let i = 0; i < buffer.length; i++){
        outPutBuffer[i] = buffer[i] ^ key;
    }
    return outPutBuffer.toString("ascii");
}

function scoreEnglishText(text) {
    return text.split("").filter(char => /^[A-Za-z0-9\s.,?!'"()]+$/.test(char)).length;
}

function decrypt(hexEncodedScript) {
    let bestScore = -1;
    let bestKey = null;
    let bestDecryptedText = null;

    for (let key=0; key < 256; key++) {
        const decryptedText = xorSingleByteKey(hexEncodedScript, key);
        const score = scoreEnglishText(decryptedText);

        if(score > bestScore) {
            bestScore = score;
            bestKey = key;
            bestDecryptedText = decryptedText;
        }
    }
    // console.log("best decrypted text: ", bestDecryptedText);
    // console.log("best key: ", bestKey);
    // console.log("best score: ", bestScore);
    return {theKey: bestKey, theScore: bestScore, theDecryptedText: bestDecryptedText};    
}

// let hexEncoded = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";
// let result = decrypt(hexEncoded);

function findBestDecryption(hexStrings) {
    let bestScore = -1;
    let bestKey = null;
    let bestDecryptedText = null;

    for (const hexString of hexStrings) {
        const result = decrypt(hexString);
        if (result.theScore > bestScore) {
            bestScore = result.theScore;
            bestKey = result.theKey;
            bestDecryptedText = result.theDecryptedText;
        }
    }

    console.log("Best decrypted text:", bestDecryptedText);
    console.log("Best key:", bestKey);
    console.log("Best score:", bestScore);
}

// Read the text file
fs.readFile('./hexes.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Split data into lines
    const lines = data.split('\n');

    // Filter out empty lines
    const hexStrings = lines.filter(line => line.trim() !== '');

    // Call the function to find the best decryption
    findBestDecryption(hexStrings);
});
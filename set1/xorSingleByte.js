function xorSingleByteKey(hexString, key) {
    const buffer = Buffer.from(hexString, "hex");
    const outPutBuffer = Buffer.alloc(buffer.length);

    for(let i = 0; i < buffer.length; i++){
        outPutBuffer[i] = buffer[i] ^ key;
    }
    console.log(outPutBuffer.toString("ascii"));
    return outPutBuffer.toString("ascii");
}

function scoreEnglishText(text) {
    return text.split("").filter(char => /[a-zA-Z]/.test(char)).length;
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
    console.log("best decrypted text: ", bestDecryptedText);
    console.log("best key: ", bestKey);
    console.log("best score: ", bestScore);
}

let hexEncoded = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";
let result = decrypt(hexEncoded);
import { stringToBytes } from "./repeatXor.js";

function calculateHammingBytes(string1, string2) {
    let result1 = stringToBytes(string1);
    let result2 = stringToBytes(string2);
    let hammingDistance = 0;

    for (let i=0; i < result1.length; i++) {
        let xor = result1[i] ^ result2[i];

        while(xor > 0){
            // add the 1 bits to hammingDistance
            hammingDistance += xor & 1;
            // shift the xor bits to the right by 1
            xor >>= 1;
        }
    }
    console.log(hammingDistance);
    return hammingDistance;
}

function findLikelyKeySize(encryptedBase64) {
    const bytesArray = atob(encryptedBase64).split("").map(char => char.charCodeAt(0));
    
}
function stringToHex(text) {
    const byteArray = stringToBytes(text);
    const hexString = byteArray.map(byte => byte.toString(16).padStart(2, '0')).join("");
    return hexString;
}

function hexToBytes(hex) {
   const bytes = [];
   for(let i = 0; i < hex.length; i+=2) {
    let byte = parseInt(hex.substr(i, 2), 16);
    bytes.push(byte);
   }
   return bytes;
}

// this function alone does what the 2 previous functions do
function stringToBytes(string) {
    const bytes = [];
    for(let i = 0; i < string.length; i++) {
        let byte = string.charCodeAt(i % string.length);
        bytes.push(byte);
    }
    return bytes;
}

function repeatKeyXor(string, key) {
    let hexString = stringToHex(string);
    const buffer = Buffer.from(hexString, "hex");
    const outputBuff = Buffer.alloc(buffer.length);

    for (let i = 0; i < buffer.length; i++){
        // get the current byte of the key
        const currentkeyByte = key.charCodeAt(i % key.length);
        outputBuff[i] = buffer[i] ^ currentkeyByte;
        
    }
    const result = outputBuff.toString("hex");
    console.log(result);
    return result;
}

let string = "Burning 'em, if you ain't quick and nimble I go crazy when I hear a cymbal"
let key = "ICE"
repeatKeyXor(string, key);
// 0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20690a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f
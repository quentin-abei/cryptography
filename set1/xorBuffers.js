function xorBuffers(buffer1, buffer2){
    if(buffer1.length !== buffer2.length) {
        throw new Error("buffers must be equal length");
    }
    // create a new buffer with size of input
    let result = Buffer.alloc(buffer1.length);

    for(let i=0; i < buffer1.length; i++){
       // perform the xor operation
       result[i] = buffer1[i] ^ buffer2[i];
    }
    const finalResult = result.toString("hex");
    return finalResult;
}

function callXor(hex1, hex2) {
    const buf1 = Buffer.from(hex1, "hex");
    const buf2 = Buffer.from(hex2, "hex");
    const xor = xorBuffers(buf1, buf2);
    return xor;
}

let hex1 = "1c0111001f010100061a024b53535009181c";
let hex2 = "686974207468652062756c6c277320657965"
const r = callXor(hex1, hex2 );
console.log("callXor return", r);
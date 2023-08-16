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
const buf1 = Buffer.from("1c0111001f010100061a024b53535009181c", "hex");
const buf2 = Buffer.from("686974207468652062756c6c277320657965", "hex");

const xor = xorBuffers(buf1, buf2);
console.log(xor);
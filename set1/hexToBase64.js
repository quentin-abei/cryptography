function hexToBase64(hex) {
    // turn hex into bytes
    const bytes = [];
    for(let i =0; i< hex.length; i+=2){
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    console.log(bytes);
    const base64 = btoa(String.fromCharCode(...bytes));
    console.log(base64);
    return base64;
    
}
const hexVal = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"
const baseVal = hexToBase64(hexVal);
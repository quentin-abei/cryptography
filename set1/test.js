const fs = require('fs');

// Function to decrypt a string with a single character XOR key
function decryptSingleCharXOR(hexString, key) {
    const encryptedBytes = Buffer.from(hexString, 'hex');
    const decryptedBytes = encryptedBytes.map(byte => byte ^ key.charCodeAt(0));
    const r = Buffer.from(decryptedBytes).toString('utf-8');
    console.log(r);
    return r;
}

// Read the file and process each line
const filePath = './hexes.txt';

fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    const lines = data.trim().split('\n');
    for (const line of lines) {
        const decrypted = decryptSingleCharXOR(line, 'A'); // Try all possible keys
        if (/^[A-Za-z0-9\s.,?!'"()]+$/.test(decrypted)) {
            console.log('Decrypted:', decrypted);
            console.log('Key:', 'A');
            break;
        }
    }
});

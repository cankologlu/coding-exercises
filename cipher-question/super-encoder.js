// Import the encryptors functions here.
const { caesarCipher, reverseCipher, symbolCipher } = require('./encryptors.js')

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  return caesarCipher(reverseCipher(symbolCipher(str)), 3)
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  return symbolCipher(reverseCipher(caesarCipher(str, -3)))
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
console.log(process.argv[2])
if(process.argv[2] !== 'encode' && process.argv[2] !== 'decode') {
  return process.stdout.write('You have to pick a method: encode | decode\n')
 } else {
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);}
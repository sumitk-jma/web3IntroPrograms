import * as crypto from 'crypto';
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Enter the text to hash: ', (input: string) => {

    const hash = crypto.createHash('sha256').update(input).digest('hex');

    console.log(`Hashed output: ${hash}`);
    rl.close();
  });
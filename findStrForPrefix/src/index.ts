import * as crypto from 'crypto';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the prefix to start hash with: ', (prefix: string) => {
  let input = 0;

  while (true) {
    let inputStr = input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

    if (hash.startsWith(prefix)) {
      
      console.log(`Desired String: ${inputStr}`);
      console.log(`Hash: ${hash}`);
      rl.close();
      return;
    }

    input++;
  }
});

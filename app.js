import { config } from 'dotenv';
config();

import { Configuration, OpenAIApi } from 'openai';
import readline from 'readline';

// const openai = new OpenAIApi(
//   new Configuration({
//     apiKey: process.env.API_KEY,
//   })
// );

const userInterface = readline.createInterface({
    input: process.stdin,//standard input
    output: process.stdout,//standard output
});
userInterface.prompt()
userInterface.on("line",async input=>{
    
})
// openai
//   .createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: 'hello chat gpt' }],
//   })
//   .then((res) => {
//     console.log(res.data.choices[0].message.content);
//   });

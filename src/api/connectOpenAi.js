import { createOpenAI } from '@ai-sdk/openai';
import { streamText, generateText } from 'ai';


export async function apiResponseAiStreamOpenAi(apiKey, LangIn, langOut, codeInput) {
    try {
        const openai = createOpenAI({
            apiKey: apiKey
        });
        const prompt = `Translate the following ${LangIn} code to ${langOut}. 
        Rules:
        1. Return only the translated code as plain text.
        2. Do not add any comments or explanations.
        3. Do not use any Markdown formatting in your response.
        4. If the input code is empty or invalid, return the following text as a comment in the target language's syntax:
   "// Invalid code: [brief explanation of the problem]. Please check your code and try again."

   Where [brief explanation of the problem] should be replaced with a concise description of the detected issue, such as "is empty", "contains syntax errors", "is not valid script", etc.

        Here's the code to translate: ${codeInput}`

        const { textStream } = await streamText({
            model: openai('gpt-4o-mini'),
            prompt: prompt,
        });

        return textStream;

    } catch (error) {
        console.log('apiResponse err', error);
    }

}

export async function apiKeyTestOpenAi(key) {
    try {
        const openai = createOpenAI({ apiKey: key });

        const prompt = `this is a test plese give a the only one word "correct" to check the api key is correct or not give the word 'error'`;

        const { text } = await generateText({
            model: openai('gpt-4o-mini'),
            prompt: prompt,
        });

        if (text) {
            console.log('gpt', text);
            return true
        }

        return false

    } catch (error) {
        console.log('apiKeyTest error', error);
        return false
    }
}
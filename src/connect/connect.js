import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, generateText } from 'ai';

export async function apiResponseAiStream(apiKey, LangIn, langOut, codeInput) {
    try {
        const google = createGoogleGenerativeAI({
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
            model: google('models/gemini-1.5-pro-latest'),
            prompt: prompt,
        });

        return textStream;

    } catch (error) {
        console.log('apiResponse err', error);
    }

}

export async function apiKeyTest(key) {
    try {
        const googleTest = createGoogleGenerativeAI({ apiKey: key });

        const prompt = `this is a test plese give a afirmative answer to check the api key is correct or not`;

        const { text } = await generateText({
            model: googleTest('models/gemini-1.5-pro-latest'),
            prompt: prompt,
        });

        return text;

    } catch (error) {
        console.log('apiKeyTest err', error);
        return 'error';
    }
}
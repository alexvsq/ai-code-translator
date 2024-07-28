'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import SNIPPETS from '@/utils/SNIPPETS';
import { TextInputApiKey } from '@/utils/TEXTS'
import { apiKeyTest } from '@/api/connectGemini'
import { apiKeyTestOpenAi } from '@/api/connectOpenAi'

const TranslatorContext = createContext();


function TranslatorProvider({ children }) {

    const [codeContent, setCodeContent] = useState('')
    const [languageValue, setLanguageValue] = useState('javascript')
    const [apiKey, setApiKey] = useState('')
    const [loading, setLoading] = useState(false)
    const [bgWeb, setBgWeb] = useState('#Fafafa')
    const [AI, setAi] = useState('gpt')

    async function validateApiInput() {
        setLoading(true)
        const apiInput = codeContent.replace(TextInputApiKey, '')
        let test
        if (AI == 'gemini') {
            test = await apiKeyTest(apiInput)
            setAi('gemini')
        } else if (AI == 'gpt') {
            test = await apiKeyTestOpenAi(apiInput)
            setAi('gpt')
        }

        if (test) {
            console.log('test', test);
            setLoading(false)
            setApiKey(apiInput)
            return
        }
        setCodeContent(TextInputApiKey)
        setLoading(false)
        alert('Error: Invalid API key')
    }

    useEffect(() => {
        if (apiKey !== '') {
            const snippet = SNIPPETS.find(snippet => snippet.id === languageValue)
            setCodeContent(snippet.code)
        } else {
            setCodeContent(TextInputApiKey)
        }
    }, [apiKey])

    const valuesContext = {
        codeContent, setCodeContent,
        languageValue, setLanguageValue,
        apiKey, setApiKey,
        loading, setLoading,
        bgWeb, setBgWeb,
        AI, setAi,
        validateApiInput
    };

    return (
        <TranslatorContext.Provider value={valuesContext}>
            {children}
        </TranslatorContext.Provider>
    );
}

function useTranslatorAi() {
    const context = useContext(TranslatorContext);
    if (!context) {
        throw new Error('useTranslatorAi must be used within a TranslatorProvider');
    }
    return context;
}

export { TranslatorProvider, useTranslatorAi };
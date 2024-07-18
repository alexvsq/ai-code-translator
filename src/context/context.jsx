'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import SNIPPETS from '@/controllers/SNIPPETS';
import { TextInputApiKey } from '@/controllers/TEXTS'
import { testApiStorage } from '@/functions/functions'

const TranslatorContext = createContext();

function TranslatorProvider({ children }) {

    const [codeContent, setCodeContent] = useState('')
    const [languageValue, setLanguageValue] = useState('javascript')
    const [apiKeyPass, setApiKeyPass] = useState(false)

    useEffect(() => {
        if (apiKeyPass == false) {
            const resp = testApiStorage()
            if (resp) {
                console.log('cambio');
                setApiKeyPass(true)
                const snippet = SNIPPETS.find(snippet => snippet.id === languageValue)
                setCodeContent(snippet.code)
                return
            }
            setApiKeyPass(false)
            setLanguageValue('javascript')
            setCodeContent(TextInputApiKey)
        }
        if (apiKeyPass) {
            const snippet = SNIPPETS.find(snippet => snippet.id === languageValue)
            setCodeContent(snippet.code)
        }
    }, [apiKeyPass])

    useEffect(() => {

    }, [])

    const value = { codeContent, setCodeContent, languageValue, setLanguageValue, apiKeyPass, setApiKeyPass };

    return (
        <TranslatorContext.Provider value={value}>
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
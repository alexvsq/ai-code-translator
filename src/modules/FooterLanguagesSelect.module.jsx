'use client'
import React, { useEffect } from 'react'
import LANGUAGES from '@/controllers/LANGUAGES'
import BtnLang from '@/components/BtnLang'
import { useTranslatorAi } from '@/context/context'
import { apiResponseAiStream } from '@/connect/connect'
import { getApiKeyFromStorage } from '@/functions/functions'

export default function FooterLanguagesSelectmodule() {
    const { languageValue, codeContent, setCodeContent, setLanguageValue, setApiKeyPass } = useTranslatorAi()

    async function generateCode(lang) {
        try {
            const apiKey = getApiKeyFromStorage()
            let response = await apiResponseAiStream(apiKey, languageValue, lang, codeContent)
            setCodeContent('')
            setLanguageValue(lang)
            for await (const chunk of response) {
                setCodeContent(prev => prev + chunk)
            }
        } catch (error) {
            setApiKeyPass(false)
            console.log('generateCode', error)
        }
    }

    return (
        <footer className='mt-7'>
            <h3 className='my-4 text-[18px] font-semibold text-center'>Press one Language to Translate</h3>
            <aside className=' my-4 flex flex-wrap gap-2 justify-center'>
                {
                    LANGUAGES.map(lang => {
                        return <BtnLang key={lang.id + 'btnsFooter'} title={lang.name} pressBtn={() => generateCode(lang.id)} />
                    })
                }
            </aside>
        </footer>
    )
}

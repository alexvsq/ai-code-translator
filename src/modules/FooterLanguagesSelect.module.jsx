'use client'
import React, { useEffect } from 'react'
import LANGUAGES from '@/utils/LANGUAGES'
import BtnLang from '@/components/BtnLang'
import { useTranslatorAi } from '@/context/context'
import { apiResponseAiStream } from '@/api/connectGemini'
import { apiResponseAiStreamOpenAi } from '@/api/connectOpenAi'

export default function FooterLanguagesSelectmodule() {
    const { languageValue, codeContent, setCodeContent, setLanguageValue, apiKey, loading, setLoading, AI } = useTranslatorAi()

    async function generateTranslationAi(lang) {
        if (apiKey == '' || loading) return

        setLoading(true)
        try {
            let response
            if (AI == 'gemini') {
                response = await apiResponseAiStream(apiKey, languageValue, lang, codeContent)
            } else if (AI == 'gpt') {
                response = await apiResponseAiStreamOpenAi(apiKey, languageValue, lang, codeContent)
            }
            setCodeContent('')
            setLanguageValue(lang)
            for await (const chunk of response) {
                setCodeContent(prev => prev + chunk)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('generateTranslationAi', error)
            alert('Error: Invalid API key')
        }
    }

    return (
        <footer className='mt-7 filter-img'>
            <h3 className='my-4 text-[18px] font-semibold text-center'>Press one Language to Translate</h3>
            <aside className=' my-4 flex flex-wrap gap-2 justify-center'>
                {
                    LANGUAGES.map(lang => {
                        return <BtnLang key={lang.id + 'btnsFooter'} title={lang.name} pressBtn={() => generateTranslationAi(lang.id)} />
                    })
                }
            </aside>
        </footer>
    )
}

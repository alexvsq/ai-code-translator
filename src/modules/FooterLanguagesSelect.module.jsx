'use client'
import React from 'react'
import LANGUAGES from '@/utils/LANGUAGES'
import BtnLang from '@/components/BtnLang'
import { useTranslatorAi } from '@/context/context'
import { apiResponseAiGemini } from '@/api/connectGemini'
import { apiResponseAiOpenAi } from '@/api/connectOpenAi'

export default function FooterLanguagesSelectmodule() {
    const { languageValue, codeContent, setCodeContent, setLanguageValue, apiKey, loading, setLoading, AI } = useTranslatorAi()

    async function generateTranslationAi(lang) {
        if (apiKey == '' || loading) return

        setLoading(true)
        try {
            let response
            if (AI == 'gemini') {
                response = await apiResponseAiGemini(apiKey, languageValue, lang, codeContent)
            } else if (AI == 'gpt') {
                response = await apiResponseAiOpenAi(apiKey, languageValue, lang, codeContent)
            }
            setCodeContent('')
            setLanguageValue(lang)

            if (response) {
                setCodeContent(response.text)
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

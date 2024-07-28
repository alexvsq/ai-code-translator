import React from 'react'
import SelectToggle from '@/components/SelectToggle'
import LANGUAGES from '@/utils/LANGUAGES'
import { AIsList } from '@/utils/AIsList'
import { useTranslatorAi } from '@/context/context'

export default function ToggleHeaderDisplay() {

    const { languageValue, setLanguageValue, apiKey, AI, setAi } = useTranslatorAi()

    function handleChangeLanguage(e) {
        setLanguageValue(e.target.value)
    }
    function handleChangeAi(e) {
        setAi(e.target.value)
    }

    return (

        <SelectToggle
            data={apiKey == '' ? AIsList : LANGUAGES}
            handleChange={apiKey == '' ? handleChangeAi : handleChangeLanguage}
            value={apiKey == '' ? AI : languageValue}
        />
    )
}

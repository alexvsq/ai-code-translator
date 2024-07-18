import React from 'react'
import SelectToggle from '@/components/SelectToggle'
import LANGUAGES from '@/controllers/LANGUAGES'
import { useTranslatorAi } from '@/context/context'

export default function ToggleHeaderDisplay() {

    const { languageValue, setLanguageValue } = useTranslatorAi()

    function handleChange(e) {
        setLanguageValue(e.target.value)
    }


    return (
        <SelectToggle
            data={LANGUAGES}
            handleChange={handleChange}
            value={languageValue}
        />
    )
}

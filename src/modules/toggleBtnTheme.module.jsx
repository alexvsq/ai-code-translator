'use client'
import SelectToggle from '@/components/SelectToggle'
import THEMES from '@/controllers/THEMES'

export default function ToggleBtnTheme({ getTheme }) {

    const arrThemes = THEMES.map(theme => theme.name)


    return (
        <SelectToggle
            data={arrThemes}
            handleChange={getTheme}
        />
    )
}
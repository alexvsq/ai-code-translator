'use client'
import { useState, useEffect } from 'react'
import MonacoEditor from './MonacoEditor'
import ToggleHeaderDisplay from './ToggleHeaderDisplay.module'
import BtnsDisplayFooter from '@/modules/BtnsDisplayFooter'
import THEMES from '@/utils/THEMES'

export default function DisplayEditormodule() {

    const [themeValue, setThemeValue] = useState('onedark')
    const [colorBg, setColorBg] = useState('#0e0e0f')

    function returnTheme(theme) {
        setThemeValue(theme.target.value)
    }

    useEffect(() => {
        try {
            const newColor = THEMES.find(theme => theme.id === themeValue).backgroundColor
            setColorBg(newColor)
        } catch (error) {
            console.log(error)
        }

    }, [themeValue])

    return (
        <>
            <div
                style={{ backgroundColor: colorBg }}
                //style={{ backgroundColor: '#000000' }}
                className="rounded-xl h-[400px] bg-blackIA shadow-lg overflow-hidden">
                <header className="flex m-3 mb-0 items-center justify-end">
                    <ToggleHeaderDisplay />
                </header>
                <MonacoEditor theme={themeValue} />
            </div>
            <BtnsDisplayFooter getTheme={returnTheme} value={themeValue} />
        </>
    )
}

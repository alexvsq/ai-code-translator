'use client'
import { useState, useEffect } from 'react'
import MonacoEditor from './MonacoEditor'
import ToggleHeaderDisplay from './ToggleHeaderDisplay.module'
import BtnsDisplayFooter from '@/modules/BtnsDisplayFooter'
import THEMES from '@/utils/THEMES'
import { useTranslatorAi } from '@/context/context'

export default function DisplayEditormodule() {

    const { bgWeb, setBgWeb } = useTranslatorAi()
    const [themeValue, setThemeValue] = useState('onedark')
    const [colorBg, setColorBg] = useState('#0e0e0f')

    function returnTheme(theme) {
        setThemeValue(theme.target.value)
    }

    useEffect(() => {
        try {
            const theme = THEMES.find(theme => theme.id === themeValue)
            setColorBg(theme.backgroundColor)
            setBgWeb(theme.backgroundColorWeb)
            //  setBgWeb(theme.backgroundGradient)
        } catch (error) {
            console.log(error)
        }

    }, [themeValue])

    return (
        <div >
            <div
                style={{ backgroundColor: colorBg }}
                //style={{ backgroundColor: '#000000' }}
                className="rounded-xl h-[400px] bg-blackIA shadow-lg overflow-hidden">
                <header className="flex m-3 mb-1 items-center justify-between">
                    <aside className='flex ml-1 gap-2'>
                        <div className='h-[10px] aspect-square bg-[#ff5e56] rounded-full'></div>
                        <div className='h-[10px] aspect-square bg-[#febc29] rounded-full'></div>
                        <div className='h-[10px] aspect-square bg-[#26c83e] rounded-full'></div>
                    </aside>
                    <ToggleHeaderDisplay />
                </header>
                <MonacoEditor theme={themeValue} />
            </div>
            <BtnsDisplayFooter getTheme={returnTheme} value={themeValue} />
        </div>
    )
}

'use client'
import SelectToggle from '@/components/SelectToggle'
import THEMES from '@/controllers/THEMES'
import { useTranslatorAi } from '@/context/context'
import { apiKeyTest } from '@/connect/connect'
import { TextInputApiKey } from '@/controllers/TEXTS'
import { saveApiKeyInStorage } from '@/functions/functions'

export default function BtnsDisplayFooter({ getTheme, value }) {
    const { codeContent, setCodeContent, apiKeyPass, setApiKeyPass } = useTranslatorAi()

    async function testApiKeyAndSave() {
        try {
            const apiKey = codeContent.replace(TextInputApiKey, '')
            const test = await apiKeyTest(apiKey)
            if (test == 'error') {
                setApiKeyPass(false)
                setCodeContent(TextInputApiKey)
                alert('Error: Invalid API key')
                return
            }
            setApiKeyPass(true)
            saveApiKeyInStorage(apiKey)
        } catch (error) {
            console.log('testApiKey err', error)
        }
    }
    function hello() {
        alert('hello')
    }

    function handleBtn() {
        if (apiKeyPass) {
            hello()
        } else {
            testApiKeyAndSave()
        }
    }

    return (
        <section className=' flex flex-col gap-5 md:gap-0 md:flex-row justify-between my-3'>
            <aside className=' flex gap-4'>
                <div>
                    <p className='text-[12px]'>Themes</p>
                    <SelectToggle
                        data={THEMES}
                        handleChange={getTheme}
                        value={value}
                    />
                </div>
                <div>
                    <p className='text-[12px]'>Fonts</p>
                    <SelectToggle
                        data={THEMES}
                        handleChange={getTheme}
                        value={value}
                    />
                </div>

            </aside>
            <button
                onClick={handleBtn}
                className='bg-greenIA text-blackIA font-semibold py-2 px-5 rounded-xl shadow-xl hover:scale-105 transition '>
                {apiKeyPass ? 'Export as image' : 'Enter API key'}
            </button>
        </section>
    )
}

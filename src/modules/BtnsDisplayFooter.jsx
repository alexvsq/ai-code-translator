'use client'
import SelectToggle from '@/components/SelectToggle'
import THEMES from '@/utils/THEMES'
import { useTranslatorAi } from '@/context/context'
import LoandingImg from '@/components/loandingImg'

export default function BtnsDisplayFooter({ getTheme, value }) {
    const { validateApiInput, apiKey, loading } = useTranslatorAi()


    function hello() {
        alert('hello')
    }

    function handleBtn() {
        if (apiKey !== '') {
            hello()
        } else {
            validateApiInput()
        }
    }

    return (
        <section className=' flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between my-3'>

            <div>
                <p className='text-[12px]'>Themes</p>
                <SelectToggle
                    data={THEMES}
                    handleChange={getTheme}
                    value={value}
                />
            </div>

            <div className=' flex justify-center'>
                {loading ? <LoandingImg /> : null}
            </div>


            <button
                onClick={handleBtn}
                className='bg-greenIA text-blackIA font-semibold py-2 px-5 rounded-xl shadow-xl hover:scale-105 transition '>
                {apiKey !== '' ? 'Export as image' : 'Enter API key'}
            </button>
        </section>
    )
}

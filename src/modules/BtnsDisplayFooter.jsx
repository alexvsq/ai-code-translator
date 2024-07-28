'use client'
import SelectToggle from '@/components/SelectToggle'
import THEMES from '@/utils/THEMES'
import { useTranslatorAi } from '@/context/context'
import LoandingImg from '@/components/loandingImg'
import { toJpeg } from 'html-to-image';

export default function BtnsDisplayFooter({ getTheme, value }) {
    const { bgWeb, validateApiInput, apiKey, loading } = useTranslatorAi()

    function downloadImage() {
        const filter = (node) => {
            const exclusionClasses = ['filter-img'];
            return !exclusionClasses.some((classname) => node.classList?.contains(classname));
        };

        toJpeg(document.getElementById('monaco-editor-container'),
            {
                quality: 1,
                filter: filter,
                backgroundColor: bgWeb,
                skipAutoScale: true,
                pixelRatio: 1,

            })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'monaco-editor.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error capturing image:', error);
            });
    }

    function handleBtn() {
        if (apiKey !== '') {
            downloadImage()
        } else {
            validateApiInput()
        }
    }

    return (
        <section className=' flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between my-3 filter-img'>

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

'use client'
export default function SelectToggle({ data = [], value = '', handleChange = () => console.log('no handle') }) {


    return (
        <select
            value={value}
            onChange={(e) => handleChange(e)}
            className='bg-grayIA outline-none px-2 shadow-lg rounded-[5px]'>

            {
                data.map((row, i) => {
                    return <option key={i + 'header'} value={row.id}>{row.name}</option>
                })
            }
        </select>
    )
}

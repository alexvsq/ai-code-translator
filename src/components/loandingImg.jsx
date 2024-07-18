
export default function loandingImg() {

    return (
        <div className='flex gap-2 items-center'>
            <img
                className='animate-spin w-7 h-7'
                src="/images/loading.png" alt="loading"
            />
            <p className='text-[13px]'>Processing...</p>
        </div>
    )
}

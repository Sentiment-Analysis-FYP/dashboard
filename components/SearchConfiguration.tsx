const SearchConfiguration = () => {
    return (
        <div className='w-[500px] h-20 flex justify-between items-center gap-2 bg-violet-50 my-2 px-4 rounded-md shadow'>
            <div className='text-violet-600 text-xl'>
                Maximum Number of tweets:
            </div>
            <input type="number" className='py-2 border-[1px] border-gray-300 rounded-md'/>
        </div>
    )
}

export default SearchConfiguration
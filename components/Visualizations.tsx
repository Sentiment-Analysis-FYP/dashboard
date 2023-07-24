const Visualizations = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 m-auto pattern'>
            <div className='absolute top-0 left-0 right-0 bottom-0 m-auto p-32 flex justify-center items-center'>
                <div className='w-full bg-white h-5/6 shadow-2xl rounded-lg p-6'>
                    <div className='flex gap-2 flex-col'>
                        <div>
                            <div>Vis</div>
                            <div>line chart</div>
                        </div>
                        <div>
                            <div>bar chart</div>
                            <div>word cloud (neg and pos)</div>
                        </div>
                        <div>
                            <div>scatter plot</div>
                            <div>stacked bar chart</div>
                        </div>
                        <div>
                            <div>pie chart</div>
                            <div>more tins</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualizations
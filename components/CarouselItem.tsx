import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselItemProps {
    imageUrl: string,
}

const CarouselItem = (props: CarouselItemProps) => {
    const {imageUrl} = props
    return (
        <div className={` flex flex-col rounded-xl justify-center px-24 items-center w-full`}>

            <div
                className=" rounded-xl justify-center items-center px-12">

                <div className=" overflow-hidden flex justify-center items-center">
                    <Image
                        unoptimized
                        src={imageUrl}
                        alt={'n'}
                        width={0}
                        height={0}
                        style={{borderRadius: '50px', width: '100%', height: '100%'}}
                    />
                </div>
            </div>

        </div>
    )
}

export default CarouselItem
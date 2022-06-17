import React from "react";

export default function BlogHeading({heading, secondHeading} : {heading: string, secondHeading: string}) {
    return(
    <div className='mb-4'>
        <h1 className='bold m-0 font-normal text-6xl '>
            {heading}
        </h1>
        <h2 className='text-2xl m-0 opacity-60 font-normal'>
            {secondHeading}
        </h2>
    </div>
        
    );
}
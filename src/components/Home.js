import React from 'react'
import Nav from '../constants/Nav'

function Home() {
    return (
        <div className='h-screen w-full bg-black flex flex-col justify-between'>
            <Nav />

            <div className='flex justify-center items-center self-center mb-80 flex-col '>
                <h1 className='text-white text-[100px] font-extrabold  font-monospace'>Welcome and that !!</h1>
                <h1 className='text-white text-[80px]   font-monospace'>Mohamed BOUTHOURI</h1>

            </div>
        </div>
    )
}

export default Home

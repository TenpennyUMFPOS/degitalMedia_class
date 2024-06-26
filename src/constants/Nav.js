import React from 'react'

function Nav() {
    return (
        <div className='w-full h-20  flex flex-row justify-center items-center'>
            < a href="/" >

                <h2 className='m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2'>Home</h2>

            </a >< a href="/Game" >

                <h2 className='m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2'>Play</h2>

            </a >< a href="/Scoreboard" >

                <h2 className='m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2'>Scoreboard</h2>

            </a >
        </div >
    )
}

export default Nav
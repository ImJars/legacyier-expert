import React from 'react';

const Home = () => {
    return ( 
        <>
        <div className='w-full bg-Background-white'>
            <div className='h-screen grid grid-cols-2 content-center'>
                <div>
                    <h1
                        className='text-Color-Text-H1 font-bold text-7xl'
                    >
                        Hello,
                    </h1>
                    <h2
                        className='text-Color-Text-H2 font-bold text-5xl'
                    >
                        I'm Angel Ramirez
                    </h2>
                    <h3
                        className='text-Color-Text-H3 font-sans text-4xl'
                    >
                        Texto inspirador sobre mi jaja
                    </h3>
                </div>
                <div>
                    <h1>Imagen</h1>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;
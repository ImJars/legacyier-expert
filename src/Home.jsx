import React from 'react';

const Home = () => {
    return ( 
        <>
        <div className='w-full bg-Background'>
            <div 
                className='h-screen grid sm:grid-cols-2 content-center
                            mx-10 sm:mx-16'
            >
                <div>
                    <h1
                        className='text-white font-roboto font-bold text-6xl sm:text-8xl'
                    >
                        Hello,
                    </h1>
                    <font className="flex">
                        <h2 className='text-Color-Text-H1 font-roboto font-bold text-4xl sm:text-6xl'>
                            I'm&nbsp;
                        </h2>
                        <h2
                        className='text-transparent bg-clip-text bg-gradient-to-r
                                 from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                  font-roboto font-bold text-4xl sm:text-6xl'
                        >
                            Angel Ramirez
                        </h2>
                    </font>
                    <button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-Background-white rounded-md group-hover:bg-opacity-0">
                            Descargar CV
                        </span>
                    </button>
                </div>
                <div>

                </div>
            </div>                 
        </div>
        </>
     );
}
 
export default Home;
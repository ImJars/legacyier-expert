import React from 'react';
// import RotatingText from './components/rotatingText';
import Scroll from './components/Scroll';
import Img from './images/home.svg';

const Home = () => {
    return ( 
        <>
        <div className='w-full h-screen bg-Background'>
            <div className='h-screen grid content-center'>
                <div>
                    <div 
                    className='sm:flex items-center mx-10 sm:mx-16'
                    >
                        <div className='sm:w-2/3'>
                            <h1 className='flex text-white font-roboto font-bold text-3xl sm:text-5xl'>
                                    Hello, I'm &nbsp; 
                                <font
                                    className='text-transparent bg-clip-text bg-gradient-to-r
                                        from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                        font-roboto font-bold text-3xl sm:text-5xl'
                                >
                                    Angel Ramirez
                                </font>

                            </h1>
                            <h2 className='text-Color-Text-H1 font-roboto font-light text-2xl sm:text-4xl'>
                                I build things for the web.
                            </h2>
                            <h3 className='text-Color-Text-H4 pt-5'>
                                I'm a software developer specializing in creating exceptional 
                                products and digital <br/> experiences. I am currently focused on 
                                creating <font className='text-Color-Text-H3'>Web3</font> technology products.
                            </h3>
                            {/* <RotatingText/> */}
                            {/* <button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-Background-white rounded-md group-hover:bg-opacity-0">
                                    Descargar CV
                                </span>
                            </button> */}
                        </div>
                        <div className='flex justify-center'>
                            <img className='h-96' src={Img} alt="" />
                        </div>
                    </div>
                </div>
                <div className='transform translate-y-32'>
                    <Scroll />
                </div>
            </div> 
        </div>
        </>
     );
}
 
export default Home;
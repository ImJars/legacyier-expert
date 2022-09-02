import React from 'react';
import RotatingText from './components/rotatingText';
// import Scroll from './components/Scroll';
// import Img from './images/home.svg';

const Home = () => {
    return ( 
        <>
        <div id='Home' className='w-full h-screen bg-Background -z-50'>
            <div className='h-screen grid content-center'>
                <div>
                    <div 
                    className='flex justify-center'
                    >
                        <div className=''>
                            <h1 className='text-white font-roboto font-bold text-4xl sm:text-8xl'>
                                    Hello, I'm&nbsp; 
                                <font
                                    className='text-transparent bg-clip-text bg-gradient-to-r
                                        from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                        font-roboto font-bold text-4xl sm:text-8xl'
                                >
                                    Angel Ramirez
                                </font>

                            </h1>
                            <h2 className='text-Color-Text-H1 font-roboto font-light text-3xl sm:text-6xl'>
                                I build things for the web.
                            </h2>
                            <h3 className='text-Color-Text-H4 pt-5 font-roboto'>
                                I'm a software developer specializing in creating exceptional<br/> 
                                products and digital experiences. I am currently focused on<br/> 
                                creating <font className='text-Color-Text-H3'>Web3</font> technology products.
                            </h3>
                            <RotatingText/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
     );
}
 
export default Home;
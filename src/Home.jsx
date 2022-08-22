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
                                    Hello, I'm&nbsp; 
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
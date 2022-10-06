import React from 'react'
import CardProject from './components/cardProject';

const OtherWorks = () => {
    return ( 
        <>
            <div
                className='bg-Background text-white w-full h-full flex justify-center pb-20'
            >
                <div className='max-w-240 flex flex-col mx-5 sm:mx-20'>
                    <div className='mb-14 sm:mb-36'>
                        <h1
                            className='text-center text-2xl sm:text-4xl font-open-sans 
                                    font-bold'
                        >
                            Other Noteworthy&nbsp;
                            <font
                                className="text-transparent bg-clip-text bg-gradient-to-r
                                        from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                        font-bold font-open-sans"
                            >
                                Projects
                            </font>
                        </h1>
                    </div>
                    <div>
                        <div 
                            className='grid md:grid-cols-2 lg:grid-cols-3'
                        >
                            <CardProject 
                                classNameGit={ 'hidden' }
                                title={ 'Project CMO' }
                                content={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio mollitia nemo dolorem. Exercitationem cupiditate reprehenderit sunt amet maxime iure pariatur'
                                }
                                technology={ 'React' }
                                technologyTwo={ 'Next.js' }
                                technologyThree={ 'TailwindCSS' }
                                technologyFour={ 'Firebase' }
                            />
                            <CardProject 
                                title={ 'Project Holcim' }
                                content={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio mollitia nemo dolorem. Exercitationem cupiditate reprehenderit sunt amet maxime iure pariatur'
                                }
                                technology={ 'SQL Server' }
                                technologyTwo={ '.NET' }
                                technologyThree={ 'Excel' }
                            />
                            <CardProject 
                                classNameLink={ 'hidden' }
                                title={ 'Project Bonafont' }
                                content={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio mollitia nemo dolorem. Exercitationem cupiditate reprehenderit sunt amet maxime iure pariatur'
                                }
                                technology={ 'Visual Basic' }
                                technologyTwo={ 'MySQL' }
                                technologyThree={ 'Excel' }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default OtherWorks;
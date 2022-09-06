import React from 'react'
import CardWork from './components/cardWork';

const Work = () => {
    return ( 
        <>
        <div id='Work' className='w-full flex justify-center'>
            <div className='min-h-750 max-w-240'>
                <div>
                    <CardWork 
                        companyLink='https://www.instagram.com/legacyier_official/'
                        companyName='Legacyier'
                        worked='Chief Executive Officer'
                        date={ 'Jan 2022 - Present' }
                        textOneVisible={
                            'Soy el creador y encargado del nombre Legacyier, mi mision es dejar huella donde los clientes buscan facilidad y una excelente experiencia al utilizar alguno de nuestros desarrollos, hacer que nuevos negocios implementen las nuevas tecnologias de forma segura, sencilla y eficiente.'
                        }
                        textTwoInvisible={
                            'Legacyier es una startup que se dedica a la innovacion y creacion web, principalmente enfocado en el mundo de la tecnologia. Actualmente estamos trabajando en la implementacion web3 y blockchain, trabajando para SMEs haciendo que no se queden fuera de esta gran tecnologia.'
                        }
                        textThreeInvisible={
                            'Comunicacion directa con clientes/empresas para entender sus necesidades y poder ofrecerles la mejor solucion posible, asi como tambien la creacion de nuevos productos y servicios.'
                        }

                    />
                    <CardWork 
                        companyLink={ 'https://blissddm.xyz/es/'}
                        companyName={ 'Bliss DDM' }
                        worked={ 'Web developer' }
                        date={ 'Jan 2021 - Dec 2021'}
                        textOneVisible={ 
                            'Escribia codigo moderno y limpio, participe con el diseño y programacion intuitiva para el usuario, atractivo para clientes potenciales.' 
                        }
                        textTwoInvisible={
                            'Trabaje con una variedad de tecnologias y plataformas como JavaScript, React, Gatsby, NodeJS, Netlify y Github.'
                        }
                        textThreeInvisible={
                            'Comunicacion con el personal a cargo satifaciendo todos los requerimientos y al mismo tiempo aprendiendo nuevas habilidades, dando reportes de los avances en el desarrollo web y trabajando en equipo.'
                        }
                    />
                    <CardWork 
                        companyLink={ 'https://www.uaeh.edu.mx/' }
                        companyName={ 'UAEH' }
                        worked={ 'Design and programming' }
                        date={ 'Jan 2020 - Dec 2020' }
                        textOneVisible={
                            'Diseñe y escribi codigo moderno en el desarrollo de un proyecto de software sobre control de versiones, utilizando las mejores practicas de programacion.'
                        }
                        textTwoInvisible={
                            'Trabaje con una variedad de tecnologias y plataformas como .Net y MySQL.'
                        }
                        textThreeInvisible={
                            'Tuve presentacion del proyecto ante el personal a cargo, dando reportes de los avances en el desarrollo y trabajando en equipo.'
                        }        
                    />
                    <CardWork 
                        companyLink={ 'https://sqdesarrollo.com.mx/' }
                        companyName={ 'SQDesarrollo & Holcim Mexico' }
                        worked={ 'Design and programming' }
                        date={ 'Jan 2019 - Dec 2019' }
                        textOneVisible={
                            'Diseñe, escribi y analice datos en el desarrollo de un proyecto de software sobre un simulador de costes de mano de obra en los proyectos de la empresa Holcim Mexico, utilizando las mejores practicas de programacion y analisis de datos.'
                        }
                        textTwoInvisible={
                            'Trabaje con las tecnologias de .NET y SQL Server dando prioridad en el desarrollo y solucion al problema de importacion de datos.'
                        }
                        textThreeInvisible={
                            'Tuve presentacion del proyecto ante el personal a cargo, dando reportes de los avances en el desarrollo y trabajando en equipo.'
                        }
                    />
                    <CardWork 
                        companyLink={ 'https://sqdesarrollo.com.mx/' }
                        companyName={ 'SQDesarrollo & Bonafont' }
                        worked={ 'Design and programming' }
                        date={ 'Jan 2018 - Dec 2018' }
                        textOneVisible={
                            'Diseñe, escribi y analice datos en el desarrollo de un proyecto de software sobre administracion, analisis y calculo de datos para la empresa Bonafont, utilizando las mejores practicas de diseño, programacion y analisis de datos.'
                        }
                        textTwoInvisible={
                            'Trabaje con la tecnologia de Visual Basic, excel y SQL Server dando prioridad en el desarrollo y analisis minucioso de datos.'
                        }
                        textThreeInvisible={
                            'Tuve presentacion del proyecto ante el personal a cargo, dando reportes de los avances en el desarrollo y trabajando en equipo.'
                        }
                    />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Work;
import React from 'react'
import CardWork from './components/cardWork';

const Work = () => {
    return ( 
        <>
        <div id='Work' className='w-full flex justify-center'>
            <div className='min-h-750 max-w-240'>
                <div>
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
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Work;
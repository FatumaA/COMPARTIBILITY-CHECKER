import React from 'react'
import model1 from '../assets/Ellipse 10.png'
import model2 from '../assets/Ellipse 11 (1).png'
import heart from '../assets/Group 35097.png'
import green from '../assets/Group 35104.png'

const Match = () => {
  return (
    <div className='py-20 left-0 h-auto pb-60'>
        {/* <div className='relative h-[500px] w-full'>
            <div className='h-[50%] z-10 top-0 bg-primary w-full absolute opacity-10'></div>
            <div className='h-[50%] z-10 bg-white bottom-0 w-full absolute'></div>
        </div> */}
        <div className='w-full relative flex justify-center items-center py-14 z-20'>
            <img src={model2} alt="model" className='' />
            <img src={model1} alt="model" className='' />
            <div className='absolute bottom-0 flex'>
                <img src={heart} alt="mode" />
            </div>
        </div>
        <div className='w-full justify-center items-center flex flex-col '>
            <img src={green} alt="mode" />
            <div className='mt-3 flex flex-col justify-center items-center'>
                <p className='text-accent text-7xl font-bold'>Yayyy!</p>
                <div className='flex justify-center mt-5 text-3xl items-end '><p className='text-accent'>It's a<span className='text-primary'> Perfect </span><span className='text-textDark'>Match</span></p></div>
                <p className='text-2xl mt-5'>Check to see if your partner is a great match for you.</p>
                <div className='bg-primary px-5 mt-5 py-3 text-white text-lg rounded-lg flex justify-center items-center'>View more</div>

            </div>
        </div>
    </div>
  )
}

export default Match
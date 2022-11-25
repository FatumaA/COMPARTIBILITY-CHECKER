import React from 'react'
import model1 from '../assets/Ellipse 10.png'
import model2 from '../assets/Ellipse 11 (1).png'
import heart from '../assets/Group 35097.png'
import Answer from '../components/Answer'


const Result = () => {
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
        <div className='mt-3 flex flex-col justify-center items-center'>
            <p className='text-textDark text-3xl font-bold'>Check out how you both matched. !</p>
            <div className='w-full flex flex-col  justify-center items-center'>
                <p className='text-2xl text-textDark mt-5 mb-3'>Result</p>
                <div className='border-2 rounded-lg border-textDark w-[400px] px-4 py-4'>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Result
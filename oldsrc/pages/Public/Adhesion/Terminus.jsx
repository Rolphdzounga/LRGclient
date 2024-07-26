import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const Terminus = () => {
  const { width, height } = useWindowSize()
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
        <div className=' text-green-400'>
          {/** SVG */}
        </div>
        <div className=' mt-3 text-xl font-semibold uppercase text-green-500 '>
          Félicitation!
        </div>
        <Confetti
          width={width}
          height={height}
        />
        <div className=' text-lg font-semibold text-gray-500 '>
          Votre adhésion a été enregistrée avec succès.
        </div>
        <Link to={'/'}>
          <button className=' h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg 
          focus:shadow-outline hover:bg-green-500 hover:text-green-100'>
            A bientot
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Terminus
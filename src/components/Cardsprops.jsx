import React from 'react'
import defaultImg from '../assets/f2f.svg'

const  Cardsprops = ({cardTitle,cardParag,cardImg}) => {
  return (
    <div className="cards flex flex-col items-center justify-start max-w-[350px] max-h-[300px] w-screen h-screen min-w-[250px] ">
            <img src={cardImg} className='h-52' alt="study online"/>
            <div className="texts text-center pt-3 border-t-2 border-slate-800 w-full">
              <h1 className='text-2xl font-semibold'>{cardTitle}</h1>
              <p className='mt-3'>{cardParag}</p>
            </div>
      </div>
  )
}

Cardsprops.defaultProps = {
  cardTitle: "Lorem ipsum Nato",
  cardParag:"Lorem ipsum dolor sit amet.",
  cardImg: defaultImg
}

export default Cardsprops


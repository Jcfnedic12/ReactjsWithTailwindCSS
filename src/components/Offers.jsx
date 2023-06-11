import React from 'react'
import onlineImg from '../assets/online.svg'
import f2fImg from '../assets/f2f.svg'
import hybridImg from '../assets/hybrid.svg'
import Cardsprops from './Cardsprops'

const Offers = () => {
  return (
    <div className='bg-slate-200 w-full'>
      <div className='max-w-7xl m-auto w-full flex items-center justify-evenly p-5 py-12 flex-wrap gap-x-3 gap-y-7'>
          <Cardsprops cardTitle={"Study with us."} cardImg={f2fImg} cardParag={"Learn with us, with our face to face schooling."}/>
          <Cardsprops cardTitle={"Learn online."} cardImg={onlineImg} cardParag={"Learn in your safe space. Spend time to other matters while learning within your home."}/>
          <Cardsprops cardTitle={"Learn when you want."} cardImg={hybridImg} cardParag={"Learn online when you want, and learn from our learning center when needed."}/>
          
          
      </div>
    </div>
  )
}

export default Offers

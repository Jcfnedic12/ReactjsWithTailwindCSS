import aralIcon from "../assets/aral.svg"

const Main = () => {
  return (
    <div className="w-full max-w-7xl flex m-auto items-center justify-evenly h-[calc(430px+100px)] sm:px-[4vw] lg:px-0">
      <div className="h-full flex flex-col justify-center items-center md:items-start text-center md:text-left flex-shrink">
        <h1 className="text-5xl font-extrabold max-w-[500px]">Learn from the 
       <span className="text-green-500"> best</span> Learn from <span className="text-green-500"> us</span></h1>
        <p className="text-xl mt-4 font-semibold break-words max-w-md text-slate-600">We cater, culture and educate across and around the world</p>
        <a href="#" className="bg-green-600 py-2 px-3 mt-5 max-w-[150px] rounded-md shadow text-center font-medium text-slate-100 hover:bg-green-700">Learn more</a>
      </div>
      <img src={aralIcon} alt="icon" className="w-[100%] max-w-[450px] self-end hidden md:block flex-shrink-[2]" />
    </div>
  )
}

export default Main
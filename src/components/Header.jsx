import { HiOutlineSearch } from "react-icons/hi";
import {FaBars} from "react-icons/Fa"
import { useState } from "react";


const Header = ({logFunct, loginBool}) => {

  const [Bool, setBool] = useState(false)
  return (
    <div className={`${!loginBool? "w-full bg-slate-100 drop-shadow fixed top-0 z-20":"w-full bg-slate-100 drop-shadow fixed top-0 z-20"} `} >
      <header className="w-full max-w-7xl flex flex-row flex-wrap  items-center justify-between mx-auto bg-slate-100 px-4 py-3  ">
      <div className="Logo w-full max-w-[250px]">
        <h1 className="text-xl font-bold">Logo</h1>
      </div>
      <div className="searchBar max-w-[250px] w-full bg-white rounded-full overflow-hidden hidden items-center justify-between ps-3 pe-1 py-1 lg:flex focus-within:outline-2 focus-within:outline focus-within:outline-green-500">
        <input type="text" placeholder="Search..." className="basis-[95%] outline-none border-none"/>
        <button className="basis-[5%] bg-slate-200 p-1 rounded-full text-slate-500 hover:text-slate-50 hover:bg-green-500"><HiOutlineSearch /></button>
      </div>
      <div className="navLinks w-full max-w-[250px] hidden lg:flex">
        <ul className="flex items-center justify-end w-full gap-6 font-medium">
          <li className="list 1 w-16 text-center font-medium"><a href="#">About</a></li>
          <li className="list 2 w-16 text-center border-[1px] rounded-md border-green-500 text-slate-700 font-medium p-1 hover:bg-green-500"><a href="#">Signup</a></li>
          <li className="list 3 w-16 text-center bg-green-500 rounded-md p-1 text-slate-100 hover:bg-green-600"><button  onClick={()=>{
              logFunct();
              console.log("weww");
            }}>
              Signin
              </button></li>
        </ul>
      </div>
      <div className="flex lg:hidden " >
        <FaBars size={'20px'} className="cursor-pointer" onClick={()=>{
          setBool(set=>!set)
        }}/>
        {
          Bool === true &&
          <div className="absolute max-w-xs w-[80vw] -bottom-44 right-1 p-4 flex items-center flex-col justify-center gap-2 before:top-0 before:left-0 before:w-full before:absolute before:h-full before:bg-slate-100 before:z-[-1] before:opacity-75">

          <div className="flex items-center justify-between overflow-hidden rounded-full border-green-500 border-2 border-solid px-2 py-1 ga">
            <input type="text" className="border-none outline-none bg-transparent"/>
            <button className="p-1 bg-green-500 rounded-full"><HiOutlineSearch /></button>
          </div>
          <hr className="bg-slate-300  rounded-full w-3/4 h-[2px] mt-1" />
          <ul className="flex flex-col gap-2 text-center">
            <li className="focus:text-slate-800"><a href="#" className="list 1 font-medium text-base">About</a></li>
            <li className="focus:text-slate-800"><a href="#" className="list 2 font-medium text-base">Singup</a></li>
            <li className="focus:text-slate-800" >
            <button className="list 3 font-medium text-base" onClick={()=>{
              logFunct();
              setBool(set=>!set)
            }}>
              Signin
              </button></li>
          </ul>
        </div>
        }
       
        
      </div>
    </header>
    </div>


   
    
  )
}

export default Header

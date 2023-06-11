import { useState } from "react";
import loginPhoto from "../assets/login.svg"
import {GrClose} from "react-icons/Gr"


function SigninModal({loginBool,logFunct}) {

  const [error, setError] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const checkInputs = (username, password)=>{
        if (/[!@#$%^&*()-_=+]\g/.test(username)) {
          setError((err)=>err="Username contains invalid characters")
        }else{
          console.log(/[!@#$%^&*()-_=+]\g/.test(username) );
        }
  }

  return (
    <div className='before:bg-slate-900 before:opacity-50 before:w-screen before:h-screen before:absolute before:z-40 fixed w-screen h-screen flex justify-center items-center z-50 modalOuter' onClick={(e)=>{
      e.target.classList.contains("modalOuter") && logFunct();
      e.target.classList.contains("closeBtn") && logFunct()
    }}>
      <div className="flex items-center justify-center flex-col relative z-[60] bg-slate-100 h-3/5 p-4 w-96 min-w-[270px] rounded-md min-h-[450px] max-h-[580px]">
        <div className="absolute -top-8 -right-8 cursor-pointer closeBtn z-[70] p-2 bg-slate-200 hover:bg-green-500 active:bg-green-600 rounded-full text-white">
      <GrClose className="pointer-events-none"/>
        </div>

      <div className="basis-1/2 w-full bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url(${loginPhoto})`}}>
      
      </div>
      <div className="basis-1/2 flex items-center justify-center flex-col w-3/4">
        <input type="text"  placeholder='Username' value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }} className="p-1 border-2 border-green-500 outline-none rounded focus-within:border-green-600 w-full"/>
        <input type="password"  placeholder='Password' value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }} className="p-1 border-2 border-green-500 outline-none rounded  focus-within:border-green-600 w-full mt-3"/>
        <p className="text-xs text-red-600 font-bold opacity-0 pointer-events-none min-h-[18px]">{error}</p>
        <button className="bg-green-600 w-full p-1 rounded text-white outline-green-600 hover:bg-green-700 active:bg-green-800 mt-3" onClick={()=>checkInputs(username,password)}>Login</button>
        <div className="h-[2px] w-3/4 bg-slate-300 mt-3"></div>
        <a href="#" className="mt-1 text-slate-500 hover:text-green-600 active:text-green-700">Forgot password</a>
      </div>
      </div>
      
    </div>
  )
}

export default SigninModal
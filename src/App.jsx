import Header from "./components/Header"
import Main from "./components/Main"
import Offers from "./components/Offers"
import Courses from "./components/Courses"
import Teachers from "./components/Teachers"
import Payments from "./components/Payments"
import SigninModal from "./components/SigninModal"
import { useState } from "react"


function App() {

 const [Login, setLogin] = useState(false)

 const openLogin = ()=>{
  console.log(Login);
  return setLogin(log=>!log)
 }

//  Gamit para mahide ung scrollbar pag open mo ng modal
  Login?document.body.style.overflow = "hidden": document.body.style.overflow = "auto";
  //------------------------------ 
  return (
    <div className={!Login?"relative":"relative overflow-x-hidden"}>
    <Header logFunct={openLogin} loginBool = {Login}/>
    {Login && <SigninModal logFunct={openLogin} loginBool = {Login}/>}
    <Main/>
    <Offers/>
    <Courses/>
    <Teachers/>
    <Payments/>
    </div>
  )
}

export default App

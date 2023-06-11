import CardforCourses from "./CardforCourses"
import mobdev from "../assets/mobdev.svg"
import webdev from "../assets/webdev.svg"
import judge from "../assets/attorney.svg"
import engineer from "../assets/engineer.svg"
import chemist from "../assets/chemist.svg"
import analyst from "../assets/analyst.svg"

function Courses() {
  return (
    <div className="w-full bg-white ">
      <div className="mx-auto outerDiv pt-6 px-4 max-w-7xl flex flex-col items-center justify-evenly gap-y-8 pb-9">
        <h1 className="font-semibold text-4xl uppercase tracking-widest">Courses</h1> 
        <div className="courses flex items-center justify-center flex-wrap">
              <CardforCourses cardImg={mobdev} cardTitle={"Mobile Development"}/>
              <CardforCourses cardImg={webdev} cardTitle={"Web Development"}/>
              <CardforCourses cardImg={analyst} cardTitle={"Data Analytics"}/>
              <CardforCourses cardImg={engineer} cardTitle={"Fundamentasl of Engineering"}/>
              <CardforCourses cardImg={judge} cardTitle={"Laws and Judiciary Course"}/>
              <CardforCourses cardImg={chemist} cardTitle={"Science and its Branches"}/>
          </div> 
      </div>
    </div>
  )
}


export default Courses
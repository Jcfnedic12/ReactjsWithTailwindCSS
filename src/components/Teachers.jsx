import jake from "../assets/jake.jpg"
import joseph from "../assets/joseph.jpg"
import jurica from "../assets/jurica.jpg"
import linkedin from "../assets/linkedin.jpg"
import TeacherProfiles from "./TeacherProfiles"


const Teachers = () => {
  return (
    <div className='w-full bg-slate-200 '>
      <div className="outerTeacher max-w-7xl mx-auto pt-6 px-6 pe-0 pb-12 flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-16">
        
          <TeacherProfiles imgeAsset={jake} imgeName={"Jake Claire Calvado"} imgeComment={"Become a full fledge UI/UX developer with my crash course and self-pace learning materials"} imgeHolder={"Senior UI/UX Developer"} />
          <TeacherProfiles imgeAsset={joseph} imgeName={"John Smit Samson"} imgeComment={"Learn Web applications and become a full stack with experienced instructors"} imgeHolder={"Web Developer"} />
          <TeacherProfiles imgeAsset={jurica} imgeName={"Cyrus Jones Calisto"} imgeComment={"Knows the Ins and Outs of becoming a Network Engineer with me"} imgeHolder={"Senior Network Engineer"} />
          <TeacherProfiles imgeAsset={linkedin} imgeName={"Jonh Laurence Santos"} imgeComment={"Become a full fledge Data Analyst with my online course"} imgeHolder={"Senior Data Analyst"} />
         
      </div>
    </div>
  )
}

export default Teachers
import defaultpic from "../assets/defaultProfilePic.svg"

const TeacherProfiles = ({imgeAsset,imgeName, imgeComment, imgeHolder}) => {
  return (
    <div className="p-8 pe-0">
      
      <div className="flex relative  p-2 rounded-md bg-slate-100 shadow-xl max-w-sm">
      {/* <img src={imgeAsset} alt={imgeName}  className="w-[120px] h-[120px] rounded-full border-slate-200  border-8  absolute -bottom-[50px]  -left-[calc(50px)] object-top object-cover shadow"/> */}
      
      <div className={`w-[120px] h-[120px] rounded-full border-slate-200  border-8  absolute -bottom-[50px]  -left-[calc(50px)] bg-top bg-cover bg-no-repeat`} style={{backgroundImage: `url(${imgeAsset})`}}></div>

        <div>
        <p className="text-[1.1rem] mb-5 font-semibold px-">{imgeComment}</p>
        <h1 className="mt-2 text-base text-slate-800 ps-[4.5rem]">{imgeName}</h1>
        <h1 className="text-sm text-slate-600 ps-[4.5rem]">{imgeHolder}</h1>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfiles

TeacherProfiles.defaultProps = {
  imgeAsset: defaultpic,
  imgeName: "Lorem, ipsum.",
  imgeComment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, porro.",
  imgeHolder: "Lorem, ipsum dolor."
}
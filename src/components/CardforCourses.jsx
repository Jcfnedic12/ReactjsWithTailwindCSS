import webdev from "../assets/webdev.svg"

function CardforCourses({cardDesc, cardImg, cardTitle}) {
  return (
    <div className="card max-w-[400px] max-h-[400px] h-full bg-white w-full p-3 flex items-center justify-between flex-col gap-y-3 shadow-sm flex-wrap hover:scale-110 hover:shadow-lg hover:z-10 transition-all ">
      <img src={cardImg} alt="image" className="h-48"/>
      <div className="basis-1/2">
        <h1 className="font-semibold text-green-700 text-lg">{cardTitle}</h1>
        <p className="text-slate-700">{cardDesc}</p>
        <a href="#" className="text-slate-600 hover:text-green-700 ">Show more...</a>
      </div>
    </div>
  )
}

CardforCourses.defaultProps = {
  cardTitle: "Some Title",
  cardDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eligendi.',
  cardImg: webdev
  
}

export default CardforCourses

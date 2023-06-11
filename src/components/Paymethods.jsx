

const Paymethods = ({PayImg, PayType, PayParagraph})=>{

  return(
    <div className="rounded-md  max-w-[280px] p-4 shadow-md max-h-[380px] h-screen flex flex-col justify-between items-center">
      <img src={PayImg} alt="image" />

      <div className="mt-3 self-start h-36">
          <h2 className="text-lg font-medium">
            {PayType}
          </h2>
          <p className="mb-2 max-h-[70px] h-[70px] overflow-y-auto">
            {PayParagraph}
          </p>

          <a href="#" className="px-2 py-1 text-white bg-green-700 rounded hover:bg-green-800">Learn more</a>
      </div>
    </div>
  )
}

export default Paymethods;

Paymethods.defaultProps ={
  PayImg: "../assets/fillForms.svg",
  PayType: "Fill the form",
  PayParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, a?"
  
}
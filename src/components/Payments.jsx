import Paymethods from "./Paymethods"
import webPay from '../assets/webPay.svg'
import mobPay from '../assets/mobilePay.svg'
import fillForm from '../assets/fillForms.svg'

const Payments = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl w-full py-10 px-8 mx-auto">
      <h1 className="text-center font-semibold text-4xl uppercase">Pay as Easy as <span className="text-green-600">Three Steps</span></h1>
      <div className="flex items-center justify-around mt-10 flex-wrap gap-y-6">
      <Paymethods PayImg={fillForm} PayType={"Fill the form"} PayParagraph={"Fill up the necessary forms and identifactions."}/>
      <Paymethods PayImg={webPay} PayType={"Check the list"} PayParagraph={"Check the lists and curriculums you want to be a part of."}/>
      <Paymethods PayImg={mobPay} PayType={"Choose how you pay"} PayParagraph={"Choose method of payments and how will you pay, You can choose payment methods of over 10 differents types!"}/>
      </div>
      
      </div>
    </div>
  )
}

export default Payments

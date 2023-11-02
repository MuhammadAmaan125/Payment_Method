import React from 'react'
import Securepayment from "../assests/Payment_Method/Secure_Payment.png"
import Refunds from "../assests/Payment_Method/Lighting_Fast_Refunds.png"
import Mastercard from "../assests/Payment_Method/Mastercard - png.png"
import Secure from "../assests/Payment_Method/image 87.png"
import HBL from "../assests/Payment_Method/HBL.png"
import Link1 from "../assests/Payment_Method/Link.png"
import Konnect from "../assests/Payment_Method/Konnect.png"
import JazzCash from "../assests/Payment_Method/JazzCash.png"
import EasyPaisa from "../assests/Payment_Method/EasyPaisa.png"
import Phone from "../assests/Payment_Method/Phone.png"

function PaymentMethod1() {
  return (
    <>
         <div className="justify-end items-start rounded border bg-white flex  max-w-full flex-col pb-12 border-solid border-zinc-300 border-opacity-80 self-start">
                            <div className="items-center rounded bg-sky-100 bg-opacity-70 self-stretch flex w-full flex-col md:px-5 px-0 py-4 border-r-4 border-r-slate-400 border-solid">
                              <div className="items-start flex md:w-[281px]  max-w-full justify-between gap-5 self-start max-md:ml-px">
                                <div className="justify-center items-center self-center flex w-4 max-w-full flex-col my-auto p-1 rounded-sm">
                                  <input type="checkbox" />
                                  
                                </div>
                                <div className="text-sky-700 text-center text-sm capitalize self-stretch whitespace-nowrap">
                                  Pay via Easypaisa Mobile account
                                </div>
                              </div>
                            </div>
                            <div className="text-neutral-700 text-xs font-light capitalize w-[261px] max-w-full ml-5 mt-6 self-start max-md:ml-2.5">
                              Enter your mobile number as registered on
                              easypaisa
                            </div>
                         
      
                            <div class="flex rounded-md p-5">
    <span class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500  dark:border-gray-700 dark:text-gray-400"> 
    <select
           
            className="h-full  outline-none rounded-md border-0 bg-transparent py-0     text-gray-500   sm:text-sm"
          >
            <option>Pk+92</option>
            <option>Ind+91</option>
          </select>
          </span>
    <input type="number" placeholder='3124567892' class="py-3 px-4 outline-none   pr-11 block md:w-[220px]  border-gray-300 border-2 shadow-sm rounded-r-md text-sm  dark:text-gray-400"/>
  </div>
  
                            <div className="items-start self-center flex w-[295px] max-w-full flex-col md:ml-4 ml-0 mt-7">
                              <div className="text-stone-900 text-opacity-60 text-xs font-light">
                                • Please make sure that your Easypaisa account
                                is active and has sufficient balance.
                              </div>
                              <div className="text-stone-900 text-opacity-60 text-xs font-light mt-2">
                                • Please enter your account's 5-digit PIN when
                                prompted on your mobile screen to complete
                                transaction.
                              </div>
                            </div>
                          </div>

    </>
  )
}

export default PaymentMethod1

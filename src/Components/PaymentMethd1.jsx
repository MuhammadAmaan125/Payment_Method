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
        <div className="bg-neutral-100 flex flex-col px-5">
      <div className="self-center flex w-full max-w-screen-xl flex-col mb-[1742px] max-md:max-w-full max-md:mb-10">
        <div className="text-slate-400 text-center text-2xl font-medium whitespace-nowrap mt-24 self-start max-md:ml-0.5 max-md:mt-10">
          Payment Options
        </div>
        <div className="self-stretch mt-7 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col w-full mx-auto rounded-lg max-md:max-w-full max-md:mt-7">
                <div className="justify-center items-center border flex w-[931px] max-w-full flex-col px-5 py-7 rounded-lg border-solid border-zinc-300 border-opacity-90 self-start">
                  <div className="items-start self-center flex w-[827px] max-w-full justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                    <div className="items-start self-stretch flex justify-between gap-2">
                      <img
                        loading="lazy"
                        src={Securepayment}
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden max-w-full self-start"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg whitespace-nowrap self-start">
                        Secure Payment
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-1">
                      <img
                        loading="lazy"
                        src={Refunds}
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg self-stretch whitespace-nowrap">
                        Lightning Fast Refunds{" "}
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae6e49a-c544-4ac8-9cad-aa514fb78b28?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg self-stretch whitespace-nowrap">
                        Trust by 10 lac customers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[895px] max-w-full self-start">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col max-md:max-w-full max-md:mt-1.5">
                        <div className="rounded bg-sky-100 bg-opacity-70 flex w-[491px] max-w-full flex-col pl-5 pr-5 pt-2 pb-7 border-r-4 border-r-slate-400 border-solid self-start">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a390ff8f-cc86-4749-bf70-ce4d0a6bc4bf?"
                            className="aspect-[0.86] object-contain object-center w-1.5 overflow-hidden max-w-full self-end max-md:mr-px"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/999552a6-0c90-4dcd-a216-2e23800fc1fb?"
                            className="aspect-[0.86] object-contain object-center w-1.5 overflow-hidden max-w-full self-end max-md:mr-px"
                          />
                          <div className="flex w-[385px] max-w-full items-start justify-between gap-5 self-start max-md:justify-center">
                            <div className="justify-center text-slate-400 text-center text-xl font-medium my-auto">
                              Debit Credit Card
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b602de6f-e32a-4b61-8ddc-077916e134eb?"
                              className="aspect-[2.5] object-contain object-center w-[70px] overflow-hidden self-stretch max-w-full"
                            />
                            <img
                              loading="lazy"
                              src={Mastercard}
                              className="aspect-[2.26] object-contain object-center w-[61px] overflow-hidden self-stretch max-w-full"
                            />
                          </div>
                        </div>
                        <div className="items-start flex w-[388px] max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:justify-center max-md:ml-2.5">
                          <div className="items-start self-stretch flex flex-col">
                            <div className="text-neutral-800 text-center text-xl whitespace-nowrap self-start">
                              HBL Direct Transfer
                            </div>
                            <div className="text-slate-400 text-center text-base font-light whitespace-nowrap self-start">
                              Save PKR 3,214 on fees
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-[2.14] object-contain object-center w-[94px] overflow-hidden self-center max-w-full my-auto"
                          />
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-square object-contain object-center w-11 overflow-hidden self-center max-w-full my-auto"
                          />
                        </div>
                        <div className="items-start flex w-[283px] max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:ml-2.5">
                          <div className="items-start flex flex-col self-start">
                            <div className="text-neutral-800 text-center text-xl whitespace-nowrap self-start">
                              1 Bill_ Bank Transfer
                            </div>
                            <div className="text-slate-400 text-center text-base font-light whitespace-nowrap self-start">
                              Save PKR 3,214 on fees
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-[1.08] object-contain object-center w-14 overflow-hidden max-w-full self-start"
                          />
                        </div>
                        <div className="items-start flex w-[358px] max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:ml-2.5">
                          <div className="text-black text-center text-xl self-center my-auto">
                            Jazzcash
                          </div>
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-[2.02] object-contain object-center w-[131px] overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                        <div className="items-start flex w-[276px] max-w-full justify-between gap-5 ml-4 mt-5 self-start max-md:ml-2.5">
                          <div className="text-black text-center text-xl my-auto">
                            Easypaisa
                          </div>
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-square object-contain object-center w-[42px] mix-blend-multiply overflow-hidden self-stretch max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex w-[398px] max-w-full grow items-start justify-between gap-5 max-md:mt-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc7b592-23d9-4ad5-9fd2-8262a1d26d9f?"
                          className="aspect-[0.01] object-contain object-center w-[7px] items-center overflow-hidden self-stretch max-w-full"
                        />
                        <div className="self-center flex flex-col grow shrink-0 basis-auto my-auto">
                          <div className="justify-end items-start rounded border bg-white flex w-[367px] max-w-full flex-col pb-12 border-solid border-zinc-300 border-opacity-80 self-start">
                            <div className="items-center rounded bg-sky-100 bg-opacity-70 self-stretch flex w-full flex-col px-5 py-4 border-r-4 border-r-slate-400 border-solid">
                              <div className="items-start flex w-[281px] max-w-full justify-between gap-5 self-start max-md:ml-px">
                                <div className="justify-center items-center bg-sky-700 self-center flex w-4 max-w-full flex-col my-auto p-1 rounded-sm">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff89e506-147a-47da-8b3a-715f93076510?"
                                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch grow"
                                  />
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
                            <div className="border self-center flex w-[327px] max-w-full flex-col mt-7 pl-2 pr-5 rounded-xl border-solid border-zinc-300">
                              <div className="flex w-40 max-w-full items-start gap-2 self-start max-md:justify-center">
                                <div className="items-start self-center flex gap-1 my-auto">
                                  <div className="text-black text-center text-xs self-center my-auto">
                                    <span className="text-zinc-400"> Pk</span>
                                    <span className="text-black">+92</span>
                                  </div>
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c052-64aa-4b20-8f52-3e2c7eea5f8e?"
                                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                                  />
                                </div>
                                <div className="bg-zinc-300 self-stretch w-px h-[47px]" />
                                <div className="text-neutral-400 text-opacity-70 text-center text-xs self-center whitespace-nowrap my-auto">
                                  3124567892
                                </div>
                              </div>
                            </div>
                            <div className="items-start self-center flex w-[295px] max-w-full flex-col -ml-4 mt-7">
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
                          </div>{" "}
                          <div className="items-start flex w-[330px] max-w-full flex-col mt-14 self-start max-md:ml-2 max-md:mt-10">
                            <div className="text-slate-400 text-xs font-medium leading-5 whitespace-nowrap self-start">
                              <span className="text-black">Please </span>
                              <span className="text-slate-400">login</span>
                              <span className="text-black">
                                {" "}
                                to avail discounts on voucher codes.
                              </span>
                            </div>{" "}
                            <div className="justify-center text-slate-400 text-xs leading-5 mt-2 self-start">
                              <span className="text-black">
                                <br />
                              </span>
                              <span className="text-neutral-400">
                                By selecting to complete this booking, I
                                acknowledge that I have read and accept the
                                above Policy section containing Fare Rules &
                                Restrictions
                              </span>
                              <span className="text-black">,</span>
                              <span className="text-slate-400">
                                Terms of Use and privacy policy
                                <br />
                              </span>
                            </div>
                          </div>{" "}
                          <div className="justify-center items-center border flex w-[304px] max-w-full grow flex-col ml-3.5 mt-16 px-5 py-3.5 rounded-xl border-solid border-zinc-300 border-opacity-80 self-start max-md:ml-2.5 max-md:mt-10">
                            <div className="text-slate-400 text-sm font-medium leading-5 self-center whitespace-nowrap">
                              Pay Now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-7">
                <div className="text-slate-400 text-center text-lg font-medium lowercase whitespace-nowrap items-center border w-[321px] max-w-full pl-4 pr-5 py-5 rounded-xl border-solid border-zinc-300 self-start">
                  Price Summary
                </div>{" "}
                <div className="justify-between items-start bg-white flex w-[321px] max-w-full gap-5 mt-3 pl-3 pr-3.5 py-5 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="items-start flex gap-1 self-start">
                    <div className="text-zinc-500 text-center text-xs lowercase self-stretch">
                      qatar airway
                    </div>{" "}
                    <div className="text-zinc-500 text-center text-xs capitalize self-stretch whitespace-nowrap">
                      (Adult x 1)
                    </div>
                  </div>{" "}
                  <div className="text-black text-center text-base uppercase whitespace-nowrap self-start">
                    Pkr 228,000
                  </div>
                </div>{" "}
                <div className="justify-between items-start bg-white flex w-[321px] max-w-full gap-5 mt-3 pl-3.5 pr-3.5 py-5 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="text-neutral-700 text-center text-lg font-medium capitalize">
                    Price you pay
                  </div>{" "}
                  <div className="text-black text-center text-base uppercase whitespace-nowrap mt-1 self-start">
                    Pkr 228,000
                  </div>
                </div>{" "}
                <div className="justify-center items-center rounded border bg-white flex w-[321px] max-w-full flex-col mt-6 px-3 py-4 border-solid border-sky-100 self-start">
                  <div className="items-start self-stretch flex w-full justify-between gap-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-square object-contain object-center w-[34px] overflow-hidden self-center max-w-full my-auto"
                    />{" "}
                    <div className="text-stone-900 text-base font-medium lowercase self-stretch max-w-[240px] grow shrink-0 basis-auto">
                      <span className="text-neutral-400">
                        having a trouble making a payment? contact our helpline
                        for assistance
                      </span>
                      <span className="text-zinc-500"> </span>
                      <span className="text-stone-900">(021)111172782</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="items-start flex w-[162px] max-w-full justify-between gap-5 mt-2 self-start">
                  <div className="text-slate-400 text-center text-base font-medium lowercase">
                    Your bookings
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b68e8d-4cc8-41b5-a716-28b2c5c93f8a?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentMethod1

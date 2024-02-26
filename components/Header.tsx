

const Header = () => {
    return (
       <>
              
            <div className="flex items-center bg-sky-950 h-dvh  ">
            <div className=" text-white w-1/3  space-x-4 ">
                <h1 className="items-stretch font-bold text-large  space-x-2 text-7xl m-10">Generate The Best Leads With Our <span className="text-gray-900 font-bold text-5xl rounded-2xl bg-amber-700">Akpager</span></h1>
                <p className=" ml-10 items-center font-bold text-large ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totame</p>
                <br />
                <div className=" flex">
                <div className=" items-center">
                 <h1 className="font-bold text-large  m-3">HAPPY CUSTOMER</h1>
                <div className="flex -space-x-2 overflow-hidden">
                    <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    />
                    <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    />
                    <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                    />
                    <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                     />
                </div>
                  </div>
                  <div className="item-center">
                    <h1 className="font-bold text-large  m-3">4.7/5 on TrustPilot</h1>
                  </div>
                </div>
               
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-white">
                        Signup Now
                    </h2>
                    <p className="text-gray-300 text-1xl font-normal space-x-0">Ready to Register Our Landsio Services</p>
                        
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <div>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            </div>
                            <input
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter Your Name"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            </div>
                            <input
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter Your Mail"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            </div>
                            <input
                                type="Number"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter Your Number"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                            </div>
                        </div>

                        {/* radio button */}
                        <div className="flex items-center mb-4 p-2 space-x-2">
                            <input type="radio" name="default-radio" className="form-checkbox h-5 w-5 text-green-600" />
                          <label htmlFor="">  <p className="text-white"> i've read and agreed to <a  className="font-bold underline text-white" href="#">Terms $ Conditions</a></p></label>
                        </div>

                           {/*    <div class="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                             </div> */}
                       

                       <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2  rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">Register !</span>
</a>

                    </div>
                    <br />
                    <br />
                    <div className="p-2 bg-white  items-center text-black leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span className="flex rounded-full bg-black text-white uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
    <span className="font-semibold mr-2 text-left flex-auto">Get the Smart Leads from our Akpager Pages</span>
    <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>



                </div>
                
            </div>
        </div>
        
       
       
       </>

    )
}

export default Header



/* 


<div>
   <label for='name'>Name:</label>
   <input type='text' id='name' name='name' value={formValues.name} onChange={handleInputChange}/>
</div>
*/

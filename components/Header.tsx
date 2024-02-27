const Header = () => {
    return (
       <div className="bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-950 text-white min-h-screen flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                <h1 className="font-bold text-4xl lg:text-6xl mb-4 lg:mb-8">Generate The Best Leads With Our <span className="text-gray-900 font-bold text-3xl lg:text-5xl rounded-2xl bg-amber-700">Akpager</span></h1>
                <p className="font-bold text-lg lg:text-xl mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totame</p>
                <div className="flex items-center">
                    <div className="flex items-center mr-4">
                        <h1 className="font-bold text-lg lg:text-xl mr-2">HAPPY CUSTOMER</h1>
                        <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h1 className="font-bold text-lg lg:text-xl">4.7/5 on TrustPilot</h1>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full mt-32 lg:w-1/2 p-8">
                <div className="sm:w-full sm:max-w-sm mx-auto">
                    <h2 className="mt-10 text-2xl lg:text-3xl font-bold leading-9 tracking-tight">Signup Now</h2>
                    <p className="text-gray-300 text-lg lg:text-xl mb-6">Ready to Register Our Landsio Services</p>
                    <div className="mt-4">
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="text"
                                className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                placeholder="Enter Your Name"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="email"
                                className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                placeholder="Enter Your Email"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="tel"
                                className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                                placeholder="Enter Your Phone Number"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

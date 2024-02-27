const content = () => {
  return (
    <div className="bg-sky-950 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-0">
        <h1 className="text-center sm:py-0 md:py-1 lg:py-10 text-2xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
          We Offer a Wide Range Of Services <br />
          Designed to Optimize Your Business <br />
          and Achieve Your <span className="text-sky-600 font-bold">Goals</span>
        </h1>
        <p className="text-neutral-400 text-1xl sm:text-xl text-center font-normal">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem <br /> aperiam eaque quae
          abillo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabos
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8">
          <input
            className="w-full sm:w-auto mb-4 sm:mb-0 mr-0 sm:mr-4 rounded-lg p-4 text-center text-xl border border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Email Address"
          />
          <a href="#_" className="relative inline-block text-xl group">
            <span className="relative z-10 block px-6 py-4 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-6 py-4 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-56 h-56 -ml-3 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-16 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Submit</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-16 -mb-2 -mr-2 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default content;

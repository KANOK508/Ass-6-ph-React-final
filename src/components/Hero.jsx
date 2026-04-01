const Hero = () => {
  return (


    
    <div className="bg-white">

        
      {/* Stats Section */}
      <section className="bg-primary py-6 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white divide-y md:divide-y-0 md:divide-x divide-purple-400">
          <div className="py-4">
            <h3 className="text-5xl font-bold">50K+</h3>
            <p className="text-lg opacity-80 mt-1">Active Users</p>
          </div>
          <div className="py-4">
            <h3 className="text-5xl font-bold">200+</h3>
            <p className="text-lg opacity-80 mt-1">Premium Tools</p>
          </div>
          <div className="py-4">
            <h3 className="text-5xl font-bold">4.9</h3>
            <p className="text-lg opacity-80 mt-1">Rating</p>
          </div>
        </div>
      </section>
      {/* Upper Section */}
      <section className="container mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge badge-ghost border-purple-200 text-shadow-indigo-50 mb-6 py-4 px-6 rounded-full font-medium bg-blue-400">
            New: AI-Powered Tools Available
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-950 leading-tight mb-6">
            Supercharge Your <br />
            <span className="text-primary">Digital Workflow</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-md">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary rounded-full px-8 shadow-lg shadow-purple-100">
              Explore Products
            </button>
            <button className="btn btn-outline btn-primary rounded-full px-8 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img src="/src/assets/banner.png" alt="" className="w-full max-w-lg drop-shadow-2xl" />
        </div>
      </section>

    </div>
  );
};

export default Hero;
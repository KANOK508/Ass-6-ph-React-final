const CTA = () => {
  return (
    <section className="bg-primary py-24 px-4 text-center text-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-lg text-purple-100 mb-10 leading-relaxed">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button className="btn bg-white text-primary hover:bg-gray-100 border-none rounded-full px-10 h-14 font-bold">
            Explore Products
          </button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary rounded-full px-10 h-14">
            View Pricing
          </button>
        </div>
        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
const MainContent = () => (
  <div className="container mx-auto px-4 md:px-10 pb-20 space-y-24">
    {/* Get Started in 3 Steps Section */}
    <section className="text-center pt-10">
      <h2 className="text-4xl font-extrabold text-slate-950 mb-4">Get Started In 3 Steps</h2>
      <p className="text-slate-500 mb-12">Start using premium digital tools in minutes, not hours.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { num: "01", icon: "user", title: "Create Account", text: "Sign up for free in seconds. No credit card required." },
          { num: "02", icon: "choose", title: "Choose Products", text: "Browse our catalog and select the tools that fit your needs." },
          { num: "03", icon: "rocket", title: "Start Creating", text: "Download and start using your premium tools immediately." }
        ].map(step => (
          <div key={step.num} className="bg-white p-10 border rounded-3xl relative text-center items-center">
            <span className="absolute top-6 right-6 badge badge-primary font-mono rounded-full w-8 h-8 p-0">{step.num}</span>
            <img src={`/src/assets/${step.icon}.png`} className="w-16 h-16 mb-6 p-4 bg-purple-50 rounded-2xl" />
            <h4 className="text-2xl font-bold text-slate-950 mb-3">{step.title}</h4>
            <p className="text-slate-600 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Pricing Section (Minimal Version for placeholder) */}
    <section className="text-center">
      <h2 className="text-4xl font-extrabold text-slate-950 mb-4">Simple, Transparent Pricing</h2>
      <p className="text-slate-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { name: "Starter", desc: "Perfect for getting started", price: "0" },
          { name: "Pro", desc: "Best for professionals", price: "29", main: true },
          { name: "Enterprise", desc: "For teams and businesses", price: "99" }
        ].map(plan => (
          <div key={plan.name} className={`bg-white p-10 border rounded-3xl ${plan.main ? 'border-primary ring-2 ring-primary relative' : ''}`}>
            {plan.main && <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-warning">Most Popular</span>}
            <h4 className="text-2xl font-bold text-slate-950">{plan.name}</h4>
            <p className="text-slate-500 text-sm mt-1 mb-6">{plan.desc}</p>
            <div className="text-5xl font-extrabold mb-10">${plan.price}<span className="text-sm font-normal text-slate-400">/Month</span></div>
            <button className={`btn rounded-full w-full ${plan.main ? 'btn-primary' : 'btn-outline'}`}>
              {plan.main ? 'Start Pro Trial' : 'Get Started Free'}
            </button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default MainContent;
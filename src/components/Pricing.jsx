const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPrimary: false
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPrimary: true,
      tag: "Most Popular"
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPrimary: false
    }
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-slate-950 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-500 mb-16">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-3xl border transition-all ${
                plan.isPrimary 
                ? 'bg-primary border-primary text-white shadow-xl scale-105 relative' 
                : 'bg-white border-gray-100 text-slate-950'
              }`}
            >
              {plan.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 text-xs font-bold py-1 px-4 rounded-full border border-amber-200">
                  {plan.tag}
                </span>
              )}
              <h3 className={`text-2xl font-bold ${plan.isPrimary ? 'text-white' : 'text-slate-950'}`}>{plan.name}</h3>
              <p className={`text-sm mt-2 mb-8 ${plan.isPrimary ? 'text-purple-100' : 'text-slate-500'}`}>{plan.desc}</p>
              
              <div className="text-5xl font-extrabold mb-10">
                ${plan.price}<span className="text-lg font-normal opacity-60">/Month</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <span className={plan.isPrimary ? "text-white" : "text-success"}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`btn w-full rounded-full h-14 border-none ${
                plan.isPrimary ? 'bg-white text-primary hover:bg-gray-100' : 'btn-primary shadow-lg shadow-purple-100'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
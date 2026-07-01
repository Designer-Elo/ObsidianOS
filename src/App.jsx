import React from 'react';

function useReveal(threshold = 0.15) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const revealClass = (visible) =>
  `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

function App() {
  const [expandedId, setExpandedId] = React.useState(5);

  const [dashboardRef, dashboardVisible] = useReveal();
  const [featuresRef, featuresVisible] = useReveal();
  const [terminalRef, terminalVisible] = useReveal();
  const [differentiatorRef, differentiatorVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  const faqData = [
    {
      id: 1,
      question: "What is ObsidianOS and how does it fit into my Web3 development workflow?",
      answer: "ObsidianOS is a terminal-first operating system designed for Web3 builders. It integrates wallet management, node interactions, and smart contract deployments into a unified, high-performance environment, eliminating the need to jump between fragmented tools."
    },
    {
      id: 2,
      question: "Do I need to install anything locally to use ObsidianOS effectively?",
      answer: "While ObsidianOS can be accessed via a lightweight client or browser, it is optimized for high-performance execution. You can install the core modules you need directly through the terminal without external dependencies."
    },
    {
      id: 3,
      question: "Which blockchain networks and protocols can I develop for using ObsidianOS?",
      answer: "ObsidianOS supports all major EVM-compatible chains (Ethereum, Polygon, Arbitrum, Optimism) as well as non-EVM protocols like Solana and Cosmos. Our modular architecture allows for custom protocol integrations."
    },
    {
      id: 4,
      question: "Is ObsidianOS open-source, and can I contribute or customize it for my own project?",
      answer: "Yes, ObsidianOS is built with an open-core philosophy. You can contribute to the core OS, build custom modules, or fork individual components to suit your specific project needs."
    },
    {
      id: 5,
      question: "Who exactly is ObsidianOS meant for, and what kind of teams or developers benefit the most?",
      answer: "ObsidianOS is built for Web3 developers across the board, whether you're a solo dev rapidly iterating on a dApp, part of a DeFi protocol team, or managing infrastructure across multiple chains. If you're tired of jumping between Remix, Hardhat, CLI tools, dashboards, and GitHub issues, ObsidianOS gives you a centralized system where code, testnets, transactions, and logs coexist. It's a powerful environment for builders who want speed, simplicity, and scalability in one place."
    }
  ];

  const heroHeadingStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '61.27px',
    lineHeight: '80px',
    letterSpacing: '0%',
    background: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 70.19%, #999999 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-primary/30 relative overflow-x-hidden w-full">
      {/* Light Effect Image relocated to root */}
      <img
        src="/light effect.png"
        alt="Lighting effect"
        className="absolute mix-blend-screen pointer-events-none z-40"
        style={{ top: '-696.59px', right: '-250px' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.parentNode.insertAdjacentHTML('beforeend', '<div class="absolute top-[5%] right-[5%] w-[300px] h-[100px] bg-[#111] rounded-xl border border-white/10 flex items-center justify-center text-gray-400 shadow-2xl p-4 z-10 text-sm">Missing: "light effect.png" in public/</div>');
          e.target.style.display = 'none';
        }}
      />
      <header className="pt-8 pb-4 relative z-50">
        <div className="max-w-[1248px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-[24px] tracking-tight flex items-center gap-2 text-primary">
            Obsidian<span className="text-white">OS</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-200">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Why us?</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              className="text-white font-semibold flex items-center justify-center transition-all hover:brightness-110 w-fit whitespace-nowrap"
              style={{
                height: '40px',
                borderRadius: '5px',
                background: 'rgba(255, 113, 53, 1)',
                boxShadow: 'inset 0px 4px 3px 0px rgba(255, 255, 255, 0.5), 0px 0px 10px 0px rgba(255, 129, 76, 1)',
                padding: '0 24px',
                gap: '10px'
              }}
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Responsive 1440px wrapper for absolute background Figma images */}
      <div className="absolute inset-x-0 top-0 w-full max-w-[1440px] mx-auto h-0 pointer-events-none z-0">
        <img
          src="/Hero bg - Left.png"
          alt="Hero background left glow"
          className="absolute max-w-none opacity-100"
          style={{ top: '20px', left: '-150px' }}
        />
        <img
          src="/Hero bg - Right.png"
          alt="Hero background right glow"
          className="absolute max-w-none opacity-100"
          style={{ top: '28.66px', left: '288.61px' }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-0 overflow-visible flex flex-col items-center justify-center text-center z-10">

        {/* Prominent Glow Effect (Button Color) */}
        <div
          className="absolute pointer-events-none z-0 rounded-[100%]"
          style={{
            width: '800px',
            height: '400px',
            top: '200px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 113, 53, 0.60)', // Adjusted prominence based on feedback
            filter: 'blur(150px)' // Beautiful natural blend without edges
          }}
        ></div>

        <div className="max-w-[1248px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7135] bg-opacity-20 border border-[#ff7135]/30 text-white text-[13px] font-medium mb-[12px] backdrop-blur-sm z-10 relative">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff7135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            Onchain Development Redefined
          </div>

          {/* Heading */}
          <h1 className="mb-[20px]" style={heroHeadingStyle}>
            Built for the Ones Who Build
          </h1>

          {/* Subheading */}
          <p className="text-[20px] text-white max-w-[800px] mb-[37px] leading-relaxed font-normal">
            A minimal, secure, lightning-fast OS made for coders, creators, and crypto-<br />native teams.
          </p>

          {/* CTA */}
          <button
            className="text-white font-semibold flex items-center justify-center transition-all hover:brightness-110 w-fit whitespace-nowrap mb-[29px]"
            style={{
              height: '40px',
              borderRadius: '5px',
              background: 'rgba(255, 113, 53, 1)',
              boxShadow: 'inset 0px 4px 3px 0px rgba(255, 255, 255, 0.5), 0px 0px 10px 0px rgba(255, 129, 76, 1)',
              padding: '0 32px',
              gap: '10px'
            }}
          >
            Get early access
          </button>
        </div>
      </section>

      {/* Dashboard Mockup Section */}
      <section ref={dashboardRef} className={`w-full max-w-[1248px] mx-auto px-6 pb-[48px] relative z-20 -mt-[10px] ${revealClass(dashboardVisible)}`}>
        <div className="relative mx-auto rounded-3xl flex items-center justify-center overflow-hidden">
          {/* The Dashboard Mockup Image */}
          <img
            src="/Dashboard mockup.png"
            alt="ObsidianOS Dashboard Mockup"
            className="w-full h-auto object-cover rounded-3xl"
            style={{
              boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 30px 80px -20px rgba(0,0,0,0.8), 0 0 40px rgba(255,113,53,0.1)'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentNode.innerHTML = '<div class="w-full aspect-[16/9] bg-[#111] rounded-3xl border border-white/10 flex flex-col items-center justify-center text-gray-500 shadow-2xl p-8"><h2 class="text-xl font-bold mb-2 text-white">Dashboard mockup.png missing</h2><p class="text-gray-400">Please name your file exactly <code>Dashboard mockup.png</code> and drop it into the <code>public/</code> folder.</p></div>';
            }}
          />

          {/* Minimal glow under the dashboard image to tie it in */}
          <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-primary/20 blur-[100px] -z-10 rounded-[100%] mix-blend-screen pointer-events-none"></div>

          {/* Extra glow at the top edge of dashboard resembling the reflection from the text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[10px] bg-gradient-to-r from-transparent via-[#ff8553]/40 to-transparent blur-[8px] -z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} className={`w-full max-w-[1248px] mx-auto px-6 pt-[120px] pb-20 relative z-20 flex flex-col ${revealClass(featuresVisible)}`}>
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-16 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7135] bg-opacity-20 border border-[#ff7135]/30 text-white text-[13px] font-medium mb-[12px] backdrop-blur-sm relative cursor-pointer hover:brightness-110 transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff7135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            Explore Our Features
          </div>

          {/* Heading */}
          <h2 className="mb-[12px] text-left" style={heroHeadingStyle}>
            Core Features
          </h2>

          <p className="text-[20px] text-white font-normal">
            Power, Precision, Possibility.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">

          {/* Top Wide Box: Modular Workflow */}
          <div className="md:col-span-2 rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden h-[453.82px]">
            {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none border-none shadow-none" style={{ top: '-143.94px', left: '252.9px', width: 'auto', height: 'auto' }} />
            <img src="/subtle light.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0" />

            <div className="relative z-10 w-full h-full flex flex-col justify-start items-start" style={{ paddingLeft: '40px', paddingTop: '35px' }}>
              <div className="flex items-start gap-4 mb-[22px]">
                <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52.98px', height: '52.98px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </div>
                <div className="flex flex-col pt-[1px]">
                  <h3 className="text-[20px] font-medium text-[#ffffff] mb-1">Modular Workflow</h3>
                  <p className="text-[#A7A7A7] text-[16px] leading-relaxed max-w-[320px]">
                    Tailor your environment with containers, toolchains, and lightweight apps.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4" style={{ marginLeft: '68.98px' }}>
                <button
                  className="text-white font-medium hover:brightness-110 transition flex items-center justify-center whitespace-nowrap"
                  style={{
                    width: '117.99217224121094px',
                    height: '39.99217224121094px',
                    borderRadius: '5px',
                    padding: '10px',
                    gap: '10px',
                    background: 'rgba(42, 42, 42, 1)',
                    boxShadow: 'inset 0px 4px 4px 0px rgba(157, 157, 157, 0.25)'
                  }}
                >
                  Watch Demo
                </button>
                <button
                  className="text-white font-medium hover:brightness-110 shadow-[inset_0px_4px_3px_0px_rgba(255,255,255,0.5),_0px_0px_10px_0px_rgba(255,129,76,1)] transition flex items-center justify-center whitespace-nowrap bg-[#ff7135]"
                  style={{
                    height: '39.99217224121094px',
                    borderRadius: '5px',
                    padding: '0 24px',
                  }}
                >
                  Get early access
                </button>
              </div>
            </div>

            {/* Dashboard Mockup - Exact absolute positioning, removing all native CSS clipping shadows/borders */}
            <img
              src="/Core features dashboard.png"
              alt="Dashboard Modular Workflow"
              className="hidden md:block absolute z-0"
              style={{
                top: '50.98px',
                left: '464.82px',
                width: 'auto',
                maxWidth: 'none',
                boxShadow: 'none',
                border: 'none',
                transform: 'scale(0.5)',
                transformOrigin: 'top left'
              }}
            />
          </div>

          {/* Bottom Left Box: Chain-Synced Security */}
          <div className="col-span-1 rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden flex flex-col h-[453.82px]">
            {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none border-none shadow-none" style={{ top: '-95.27px', left: '-73.69px', width: 'auto', height: 'auto' }} />
            <img src="/subtle light.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0" />

            <div className="relative z-10 w-full h-full flex flex-col">
              <div className="flex flex-col items-start justify-start" style={{ paddingLeft: '40px', paddingTop: '35px' }}>
                <div className="flex items-start gap-4 mb-[22px]">
                  <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52.98px', height: '52.98px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div className="flex flex-col pt-[1px]">
                    <h3 className="text-[20px] font-medium text-[#ffffff] mb-1">Chain-Synced Security</h3>
                    <p className="text-[#A7A7A7] text-[16px] leading-relaxed max-w-[360px]">
                      Built-in identity management and wallet support, right from boot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Image */}
              <div className="mt-auto relative w-full flex-grow flex items-end justify-center pb-0 -translate-y-[10px]">
                <img src="/Chain-Synched cards.png" alt="Chain-Synced Security Layout" className="max-w-none relative z-10" style={{ width: 'auto', height: 'auto', maxWidth: 'none', objectFit: 'none' }} />
              </div>
            </div>
          </div>

          {/* Bottom Right Box: Instant Dev Deploys */}
          <div className="col-span-1 rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden flex flex-col h-[453.82px]">
            {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none border-none shadow-none" style={{ top: '-181.93px', left: '128.95px', width: 'auto', height: 'auto' }} />
            <img src="/subtle light.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0" />

            <div className="relative z-10 w-full h-full flex flex-col">
              <div className="flex flex-col items-start justify-start" style={{ paddingLeft: '40px', paddingTop: '35px' }}>
                <div className="flex items-start gap-4 mb-[22px]">
                  <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52.98px', height: '52.98px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <div className="flex flex-col pt-[1px]">
                    <h3 className="text-[20px] font-medium text-[#ffffff] mb-1">Instant Dev Deploys</h3>
                    <p className="text-[#A7A7A7] text-[16px] leading-relaxed max-w-[360px]">
                      Integrated Git + CLI = Push to live in seconds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Dev Deploys Image */}
              <div className="mt-auto relative w-full flex-grow flex items-center justify-center pb-0">
                <img src="/Instant Devs Deploys image.png" alt="Dev Deploys Layout" className="max-w-none relative z-10" style={{ width: 'auto', height: 'auto', maxWidth: 'none', objectFit: 'none' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="w-full flex justify-center mt-20">
          <p
            className="text-center"
            style={{
              width: '597px',
              height: '65px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '29.99px',
              lineHeight: '64.97px',
              letterSpacing: '0%',
              background: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 63.46%, #999999 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 1
            }}
          >
            Run stable, run silent. No bloat. Just build.
          </p>
        </div>
      </section>

      <section ref={terminalRef} className={`relative pt-[28px] pb-32 flex flex-col items-center justify-center text-center overflow-visible ${revealClass(terminalVisible)}`}>
        {/* Background Images Wrapper - Mirroring Hero style */}
        <div className="absolute inset-0 w-full max-w-[1440px] mx-auto pointer-events-none z-0">
          <img
            src="/Hero bg - Left.png"
            alt=""
            className="absolute max-w-none opacity-80"
            style={{ top: '0', left: '268.61px', mixBlendMode: 'plus-lighter' }}
          />
          <img
            src="/Hero bg - Right.png"
            alt=""
            className="absolute max-w-none opacity-80"
            style={{ top: '0', right: '228.61px', mixBlendMode: 'plus-lighter' }}
          />
        </div>

        {/* Bright Glow Effect - Matching Hero */}
        <div
          className="absolute pointer-events-none z-0 rounded-[100%]"
          style={{
            width: '800px',
            height: '400px',
            top: '34%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 113, 53, 0.85)',
            filter: 'blur(150px)',
            mixBlendMode: 'plus-lighter'
          }}
        ></div>
        <div className="max-w-[1248px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7135] bg-opacity-20 border border-[#ff7135]/30 text-white text-[13px] font-medium mb-[12px] backdrop-blur-sm relative">
            <div className="w-5 h-5 rounded-md bg-[#ff7135]/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#ff7135" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            Live Preview
          </div>
          <h2 className="mb-4 text-center" style={heroHeadingStyle}>
            Your Terminal. Reimagined.
          </h2>
          <p className="text-[20px] text-white max-w-2xl font-normal mb-[44px]">
            Explore development possibilities, LIVE
          </p>

          <div className="relative w-full -mt-[30px]">
            <img
              src="/Terminal.png"
              alt="ObsidianOS Terminal"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section ref={differentiatorRef} className={`max-w-[1248px] w-full mx-auto px-6 pt-[78px] pb-32 flex flex-col items-center ${revealClass(differentiatorVisible)}`}>
        {/* Header Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7135] bg-opacity-10 border border-[#ff7135]/20 text-white text-[13px] font-medium mb-[12px] backdrop-blur-sm relative">
          <div className="w-5 h-5 rounded-md bg-[#ff7135]/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff7135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </div>
          Why ObsidianOS?
        </div>
        
        {/* Section Heading */}
        <h2 className="mb-4 text-center max-w-[800px] leading-tight" style={heroHeadingStyle}>
          What Makes ObsidianOS Different?
        </h2>
        
        {/* Subtext */}
        <p className="text-[20px] text-white max-w-2xl font-normal mb-16 text-center">
          Built For One, Solutions For All
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Built for Developers */}
          <div className="rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden flex flex-col group min-h-[481.81px] h-[481.81px]">
            {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none opacity-40" style={{ top: '-100px', right: '-100px' }} />
            
            <div className="p-8 pt-10 relative z-10">
              <div className="flex items-start gap-4 mb-1">
                <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52px', height: '52px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <div className="flex flex-col pt-[1px]">
                  <h3 className="text-[20px] font-medium text-white mb-1">Built for Developers</h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Build, push, and deploy directly from your terminal. ObsidianOS works the way developers do.
                  </p>
                </div>
              </div>
            </div>
            {/* Visual Asset */}
            <div className="mt-auto px-4 pb-0 flex justify-center w-full">
               <img src="/Built for Devs.png" alt="" className="w-full h-auto object-contain scale-[1.02] origin-bottom" />
            </div>
          </div>

          {/* Card 2: Smart Resource Allocation */}
          <div className="rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden flex flex-col group min-h-[481.81px] h-[481.81px]">
            {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none opacity-40" style={{ top: '-150px', left: '-50px' }} />
            
            <div className="p-8 pt-10 relative z-10">
              <div className="flex items-start gap-4 mb-1">
                <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52px', height: '52px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><path d="M22 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>
                </div>
                <div className="flex flex-col pt-[1px]">
                  <h3 className="text-[20px] font-medium text-white mb-1">Smart Resource Allocation</h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Let ObsidianOS recommend the best use of compute, storage, and memory.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Metrics Visual */}
            <div className="mt-auto px-4 pb-0 flex justify-center w-full">
               <img src="/Smart Resource Allocation.png" alt="" className="w-full h-auto object-contain origin-bottom" />
            </div>
          </div>

          {/* Card 3: Built with Zero Trust Principles (Wide) */}
          <div className="md:col-span-2 rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden flex flex-col md:flex-row min-h-[481.81px] h-[481.81px]">
            {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none opacity-40" style={{ bottom: '-100px', left: '10%' }} />
            
            <div className="p-8 pt-10 relative z-10 md:w-1/2">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52px', height: '52px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
                </div>
                <div className="flex flex-col pt-[1px]">
                  <h3 className="text-[20px] font-medium text-white mb-1">Built with Zero Trust Principles</h3>
                  <p className="text-gray-400 text-[16px] leading-relaxed">
                    Every request, module is sandboxed. Role-based access, and hardened defaults by design.
                  </p>
                </div>
              </div>
            </div>
            {/* Visual Asset */}
            <div className="md:w-1/2 flex items-center justify-center p-4">
               <img src="/Zero Principles.png" alt="" className="w-full h-auto object-contain max-h-[400px]" />
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className={`max-w-[1248px] w-full mx-auto px-6 pt-[38px] pb-32 flex flex-col items-center ${revealClass(faqVisible)}`}>
        {/* Header Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7135] bg-opacity-10 border border-[#ff7135]/20 text-white text-[13px] font-medium mb-[12px] backdrop-blur-sm relative">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff7135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
           FAQ
        </div>
        
        {/* Section Heading */}
        <h2 className="mb-4 text-center max-w-[800px] leading-tight" style={heroHeadingStyle}>
          Frequently Asked Questions
        </h2>
        
        {/* Subtext */}
        <p className="text-[20px] text-white max-w-2xl font-normal mb-16 text-center">
          Questions Often Asked By ObsidianOS users
        </p>

        {/* Accordion Container */}
        <div className="w-full max-w-[859.66px] space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={`rounded-[10px] border border-white/5 bg-[#0c0c0c] transition-all duration-300 cursor-pointer overflow-hidden group ${expandedId === item.id ? 'bg-[#111111] border-white/10' : 'hover:border-white/10'}`}
            >
              {/* Question Row */}
              <div
                className="px-8 flex items-center justify-between transition-all"
                style={{ height: '78.97px' }}
              >
                <span className="text-[18px] font-medium text-white/90 leading-tight">
                  {item.question}
                </span>
                <div className={`shrink-0 transition-transform duration-300 ${expandedId === item.id ? 'rotate-90 text-white' : 'text-gray-500 group-hover:text-white'}`}>
                  {expandedId === item.id ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10"></path><path d="M17 17V7H7"></path></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10"></path><path d="M17 17V7H7"></path></svg>
                  )}
                </div>
              </div>

              {/* Answer Content */}
              <div
                className={`transition-all duration-300 ease-in-out px-8 text-left overflow-hidden ${expandedId === item.id ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pt-2 border-t border-white/5 text-gray-400 text-[16px] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Pre-Footer */}
      <section ref={ctaRef} className={`max-w-[1200px] w-full mx-auto px-6 mt-[38px] mb-[210px] ${revealClass(ctaVisible)}`}>
        <div 
          className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center rounded-[10px] border border-[#242424] bg-[#0c0c0c]"
          style={{ height: '417.8px' }}
        >
          {/* Hero Background Images - Integrated into CTA */}
          <img
            src="/Hero bg - Left.png"
            alt=""
            className="absolute max-w-none opacity-40 pointer-events-none"
            style={{ 
              top: '-150px', 
              left: '-300px', 
              width: '1200px',
              mixBlendMode: 'plus-lighter',
              transform: 'scale(1.3)'
            }}
          />
          <img
            src="/Hero bg - Right.png"
            alt=""
            className="absolute max-w-none opacity-40 pointer-events-none"
            style={{ 
              top: '-150px', 
              right: '-300px', 
              width: '1200px',
              mixBlendMode: 'plus-lighter',
              transform: 'scale(1.3)'
            }}
          />

          {/* Prominent Glow Effect (Matches Hero) */}
          <div
            className="absolute pointer-events-none z-0 rounded-[100%]"
            style={{
              width: '600px',
              height: '300px',
              top: 'calc(50% + 130px)',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(255, 113, 53, 0.80)',
              filter: 'blur(120px)',
              mixBlendMode: 'plus-lighter'
            }}
          ></div>

          {/* Bottom Glow Image Layer */}
          <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-0">
            <img 
              src="/CTA Light.png" 
              alt="" 
              className="w-full h-full object-bottom object-contain"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-center px-4 max-w-[800px]">
            <h2 className="mb-6 text-center mx-auto" style={heroHeadingStyle}>
              Ready to Reprogram <br /> Your Workflow?
            </h2>
            <p className="text-white text-[18px] md:text-[20px] font-medium mb-10 opacity-90">
              Limited slots. No fluff. Just code.
            </p>
            
            {/* Button */}
            <button
              className="text-white font-semibold flex items-center justify-center transition-all hover:brightness-110 active:scale-95 group relative overflow-hidden"
              style={{
                height: '40px',
                borderRadius: '5px',
                background: 'rgba(255, 113, 53, 1)',
                boxShadow: 'inset 0px 4px 3px 0px rgba(255, 255, 255, 0.5), 0px 0px 10px 0px rgba(255, 129, 76, 1)',
                padding: '0 32px',
                gap: '10px'
              }}
            >
              Get ObsidianOS Alpha Access
            </button>
          </div>
        </div>
      </section>

      {/* Footer Wrapper with Watermark behind */}
      <div className="relative w-full mt-40 pt-20">
        {/* Large Background Watermark Text - Positioned behind and cut off */}
        <div 
          className="absolute left-0 right-0 pointer-events-none z-0 overflow-hidden" 
          style={{ 
            height: '246px', 
            top: '-80px', 
            opacity: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <span style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '203.66px',
            lineHeight: '100%',
            background: 'linear-gradient(0deg, #090909 29.59%, #727272 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            whiteSpace: 'nowrap',
            WebkitTextStroke: '0.96px rgba(138, 138, 138, 0.2)'
          }}>
            ObsidianOs
          </span>
        </div>

        {/* Footer Container - Full Width */}
        <footer 
          className="relative w-full z-10" 
          style={{ 
            height: '623.75px', 
            background: 'rgba(12, 12, 12, 1)',
            padding: '1px 0', 
            borderTop: '1px solid transparent',
            position: 'relative'
          }}
        >
          {/* Top Border Gradient Simulation */}
          <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{
            background: 'radial-gradient(75.76% 75.76% at 48.19% 24.24%, #8A8A8A 0%, rgba(36, 36, 36, 0) 100%)',
          }} />

          {/* Footer Content Wrapper - Fixed Center Width */}
          <div className="max-w-[1248px] mx-auto px-6 h-full flex flex-col pt-[80px] pb-6">
            
            {/* Top Row: Logo and Link Columns - Flex with reduced gap */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-x-[12px] mb-12">
              <div className="max-w-[340px]">
                <div className="text-[24px] font-bold text-[#ff7135] mb-4">ObsidianOS</div>
                <p className="text-[#A7A7A7] text-[14px] leading-relaxed max-w-[320px]">
                  The modular OS for Web3 builders. Streamline your stack, deploy faster.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Product</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#A7A7A7]">
                  <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terminal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Smart Contract Kit</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Node Manager</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Wallet Sync</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Developers</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#A7A7A7]">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Starter Kits</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Obsidian CLI</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Company</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#A7A7A7]">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Resources</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#A7A7A7]">
                  <li><a href="#" className="hover:text-white transition-colors">Guides & Tutorials</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Release Notes</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Join Discord</a></li>
                </ul>
              </div>
            </div>

            {/* Line 1: Divider */}
            <div className="w-full mb-12">
              <div 
                style={{ 
                  width: '100%', 
                  height: '0.5px', 
                  background: '#2C2C2C',
                  opacity: 1 
                }} 
              />
            </div>

            {/* Middle Row: Open Source and Subscription */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-auto">
              <div className="flex flex-col gap-2">
                <h4 className="text-white text-[18px] font-semibold">Open Source</h4>
                <p className="text-[#A7A7A7] text-[14px] leading-relaxed max-w-[340px]">
                  Built by devs, for devs. ObsidianOS is an open-source project supporting multichain development.
                </p>
              </div>

              <div className="flex flex-col gap-4 items-start text-left">
                <p className="text-[#A7A7A7] text-[14px] leading-relaxed max-w-[380px]">
                  Get product updates, chain support releases, and engineering deep dives.
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="relative flex items-center px-1"
                    style={{
                      width: '242.9px',
                      height: '39.98px',
                      background: 'rgba(12, 12, 12, 1)',
                      borderRadius: '10px',
                      border: '1px solid transparent',
                      backgroundClip: 'padding-box',
                      position: 'relative'
                    }}
                  >
                    {/* Input Border Gradient Simulation */}
                    <div className="absolute inset-0 rounded-[10px] pointer-events-none" style={{
                      padding: '1px',
                      margin: '-1px',
                      background: 'radial-gradient(75.76% 75.76% at 48.19% 24.24%, #8A8A8A 0%, #242424 100%)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }} />
                    <input 
                      type="email" 
                      placeholder="Email address..." 
                      className="bg-transparent border-none outline-none text-[#A7A7A7] text-[14px] px-3 w-full h-full relative z-10"
                    />
                  </div>
                  <button
                    className="text-white font-semibold flex items-center justify-center transition-all hover:brightness-110 shadow-[inset_0px_4px_3px_0px_rgba(255,255,255,0.5),_0px_0px_10px_0px_rgba(255,129,76,1)] bg-[#ff7135]"
                    style={{
                      height: '39.98px',
                      borderRadius: '10px',
                      padding: '0 24px',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Line 2: Divider */}
            <div className="w-full mb-8">
              <div 
                style={{ 
                  width: '100%', 
                  height: '0.5px', 
                  background: '#2C2C2C',
                  opacity: 1 
                }} 
              />
            </div>

            {/* Socials and Copyright Row */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <p className="text-[#A7A7A7] text-[14px]">© 2025 ObsidianOS.</p>
              <div className="flex items-center gap-[19px] mt-4 md:mt-0">
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity font-bold text-lg">X</a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.27,4.73C17.77,4.05,16.18,3.52,14.51,3.19C14.3,3.56,14.07,4.04,13.9,4.44C12.16,4.18,10.43,4.18,8.72,4.44C8.55,4.04,8.32,3.56,8.11,3.19C6.44,3.52,4.85,4.05,3.35,4.73C0.32,9.27-0.5,13.69,0.1,18.06C2.1,19.55,4.03,20.45,5.92,21.05C6.39,20.41,6.81,19.73,7.16,19.01C6.48,18.75,5.83,18.43,5.22,18.06C5.39,17.94,5.55,17.81,5.71,17.68C9.4,19.38,13.38,19.38,17.03,17.68C17.19,17.81,17.35,17.94,17.51,18.06C16.9,18.43,16.25,18.75,15.57,19.01C15.92,19.73,16.34,20.41,16.81,21.05C18.7,20.45,20.63,19.55,22.63,18.06C23.35,12.69,21.43,8.34,19.27,4.73ZM8.33,15.54C7.19,15.54,6.26,14.49,6.26,13.19C6.26,11.89,7.17,10.84,8.33,10.84C9.5,10.84,10.43,11.89,10.41,13.19C10.41,14.49,9.5,15.54,8.33,15.54ZM14.4,15.54C13.26,15.54,12.33,14.49,12.33,13.19C12.33,11.89,13.26,10.84,14.4,10.84C15.56,10.84,16.5,11.89,16.48,13.19C16.48,14.49,15.56,15.54,14.4,15.54Z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;

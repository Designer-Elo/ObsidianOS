import React from 'react';

function App() {
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
          <h1
            className="mb-[20px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '61.27px',
              lineHeight: '64.97px',
              letterSpacing: '0%',
              background: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 70.19%, #999999 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
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
      <section className="w-full max-w-[1248px] mx-auto px-6 pb-32 relative z-20">
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
      <section className="w-full max-w-[1248px] mx-auto px-6 py-20 relative z-20 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7135] bg-opacity-20 border border-[#ff7135]/30 text-white text-[13px] font-medium mb-[12px] backdrop-blur-sm relative cursor-pointer hover:brightness-110 transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff7135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            Explore Our Features
          </div>

          {/* Heading */}
          <h2 className="text-[52px] leading-tight font-medium tracking-tight mb-[12px]">
            <span className="text-white">Core </span>
            <span className="text-gray-400">Features</span>
          </h2>
          
          <p className="text-[20px] text-gray-300 font-normal">
            Power, Precision, Possibility.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          
          {/* Top Wide Box: Modular Workflow */}
          <div className="md:col-span-2 rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden h-[453.82px]">
            {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none border-none shadow-none" style={{ top: '-143.94px', left: '252.9px', width: 'auto', height: 'auto' }} />
            
            <div className="relative z-10 w-full h-full flex flex-col justify-start items-start" style={{ paddingLeft: '60px', paddingTop: '40px' }}>
              <div className="flex items-start gap-4 mb-8 mt-2">
                <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52.98px', height: '52.98px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <h3 className="text-[20px] font-medium text-[#ffffff] mb-1">Modular Workflow</h3>
                  <p className="text-[#A7A7A7] text-[16px] leading-relaxed max-w-[400px]">
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
            
            <div className="relative z-10 w-full h-full flex flex-col items-start justify-start" style={{ paddingLeft: '50px', paddingTop: '40px' }}>
              <div className="flex items-start gap-4 mb-8 mt-2">
                <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52.98px', height: '52.98px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <h3 className="text-[20px] font-medium text-[#ffffff] mb-1">Chain-Synced Security</h3>
                  <p className="text-[#A7A7A7] text-[16px] leading-relaxed max-w-[360px]">
                    Built-in identity management and wallet support, right from boot.
                  </p>
                </div>
              </div>
              
              {/* Security Image */}
              <div className="mt-auto relative w-full flex-grow flex items-end justify-center pb-0">
                <img src="/Chain-Synched cards.png" alt="Chain-Synced Security Layout" className="max-w-none relative z-10" style={{ width: 'auto', height: 'auto', maxWidth: 'none', objectFit: 'none' }} />
              </div>
            </div>
          </div>

          {/* Bottom Right Box: Instant Dev Deploys */}
          <div className="col-span-1 rounded-[10px] border border-white/5 bg-[#0c0c0c] relative overflow-hidden flex flex-col h-[453.82px]">
             {/* Dot Background */}
            <img src="/Dot bg.png" alt="" className="absolute pointer-events-none z-0 max-w-none border-none shadow-none" style={{ top: '-181.93px', left: '128.95px', width: 'auto', height: 'auto' }} />
            
            <div className="relative z-10 w-full h-full flex flex-col items-start justify-start" style={{ paddingLeft: '50px', paddingTop: '40px' }}>
              <div className="flex items-start gap-4 mb-8 mt-2">
                <div className="flex items-center justify-center shrink-0" style={{ background: '#090909', width: '52.98px', height: '52.98px', borderRadius: '4.5px', border: '1px solid #242424' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <h3 className="text-[20px] font-medium text-[#ffffff] mb-1">Instant Dev Deploys</h3>
                  <p className="text-[#A7A7A7] text-[16px] leading-relaxed max-w-[360px]">
                    Integrated Git + CLI = Push to live in seconds.
                  </p>
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
        <p className="mt-20 text-[20px] text-gray-400 font-normal">
          Run stable, run silent. No bloat. <span className="text-white">Just build.</span>
        </p>
      </section>

      {/* Terminal Section */}
      <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Glow behind terminal section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="max-w-[1248px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-[13px] text-primary font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#FF7135]"></div>
            DEVELOPER FIRST
          </div>
          <h2 className="text-[48px] leading-tight font-semibold tracking-tight text-gradient mb-4">
            Your Terminal, Reimagined.
          </h2>
          <p className="text-[20px] text-[#A1A1AA] max-w-2xl font-normal mb-16">
            An IDE experience inside your CLI.
          </p>

          <div className="relative w-full max-w-6xl rounded-2xl border border-border bg-surface aspect-[16/9] shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <p className="text-gray-500 font-medium text-lg">Terminal Interface Mockup Placeholder</p>
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="max-w-[1248px] w-full mx-auto px-6 py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-[13px] text-primary font-medium mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#FF7135]"></div>
          WHY OBSIDIAN OS?
        </div>
        <h2 className="text-[48px] leading-tight font-semibold tracking-tight text-white mb-4">
          What Makes ObsidianOS Different?
        </h2>
        <p className="text-[20px] text-[#A1A1AA] max-w-2xl font-normal mb-16">
          Built for true performance.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl text-left">
          {/* Large card 1 */}
          <div className="rounded-2xl border border-border bg-surface p-8 pt-10 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Built on Rust</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Sub-millisecond latency. Safe concurrency. We rewrote the rules so you never have to wait.
            </p>
            <div className="mt-auto h-[150px] rounded-xl border border-border bg-black/50 overflow-hidden flex items-center justify-center">
              <p className="text-sm text-gray-600">Performance Chart Placeholder</p>
            </div>
          </div>

          {/* Large card 2 */}
          <div className="rounded-2xl border border-border bg-surface p-8 pt-10 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Deep ChatGPT Integration</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Ask questions, generate scripts, and analyze logs without leaving your terminal context.
            </p>
            <div className="mt-auto h-[150px] rounded-xl border border-border bg-black/50 overflow-hidden flex items-center justify-center">
              <p className="text-sm text-gray-600">AI Chat UI Placeholder</p>
            </div>
          </div>

          {/* Wide Card 3 */}
          <div className="rounded-2xl border border-border bg-surface p-8 pt-10 flex flex-col relative overflow-hidden group lg:col-span-2">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Infinite Local Memory</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl">
              Every command, output, and script you've ever run is automatically indexed, encrypted, and searchable forever.
            </p>
            <div className="h-[200px] rounded-xl border border-border bg-black/50 overflow-hidden flex items-center justify-center">
              <p className="text-sm text-gray-600">Search History UI Placeholder</p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1248px] w-full mx-auto px-6 py-32 max-w-3xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-[13px] text-primary font-medium mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#FF7135]"></div>
          FAQ
        </div>
        <h2 className="text-[48px] leading-tight font-semibold tracking-tight text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full flex flex-col gap-4">
          {/* Accordion Item 1 */}
          <div className="border border-border bg-surface rounded-xl overflow-hidden cursor-pointer hover:border-gray-700 transition-colors">
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="font-medium text-gray-200">What makes Obsidian OS different from iTerm or Warp?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {/* Accordion Item 2 */}
          <div className="border border-border bg-surface rounded-xl overflow-hidden cursor-pointer hover:border-gray-700 transition-colors">
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="font-medium text-gray-200">How does the ChatGPT integration work securely?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {/* Accordion Item 3 */}
          <div className="border border-border bg-surface rounded-xl overflow-hidden cursor-pointer hover:border-gray-700 transition-colors">
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="font-medium text-gray-200">Can I self-host Obsidian OS on my own infrastructure?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {/* Accordion Item 4 */}
          <div className="border border-border bg-surface rounded-xl overflow-hidden cursor-pointer hover:border-gray-700 transition-colors">
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="font-medium text-gray-200">Is there a limit to the local search history?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {/* Accordion Item 5 */}
          <div className="border border-border bg-surface rounded-xl overflow-hidden cursor-pointer hover:border-gray-700 transition-colors">
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="font-medium text-gray-200">Do you support custom bash/zsh configurations?</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden flex flex-col items-center justify-center text-center mt-20 border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="max-w-[1248px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-[56px] leading-tight font-semibold tracking-tight text-white mb-6">
            Ready to Reprogram Your Workflow?
          </h2>
          <p className="text-[20px] text-[#A1A1AA] max-w-2xl font-normal mb-10">
            Join 10,000+ engineers building faster with ObsidianOS.
          </p>
          <button
            className="text-white font-semibold flex items-center justify-center transition-all hover:brightness-110 w-fit whitespace-nowrap"
            style={{
              height: '40px',
              borderRadius: '5px',
              background: 'rgba(255, 113, 53, 1)',
              boxShadow: 'inset 0px 4px 3px 0px rgba(255, 255, 255, 0.5), 0px 0px 10px 0px rgba(255, 129, 76, 1)',
              padding: '0 36px',
              gap: '10px'
            }}
          >
            Get Started for Free
          </button>
        </div>

        {/* Background Text Watermark */}
        <div className="absolute bottom-[-5%] left-0 right-0 flex justify-center pointer-events-none overflow-hidden h-[300px]">
          <span className="text-[18vw] font-bold leading-none text-white/5 whitespace-nowrap select-none">ObsidianOS</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border relative z-20">
        <div className="max-w-[1248px] w-full mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="font-semibold text-xl flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-orange-700 flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rotate-45"></div>
                </div>
                Obsidian <span className="text-gray-400">OS</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 max-w-xs leading-relaxed">
                The terminal OS built for the modern era of software engineering.
              </p>
              <div className="flex items-center gap-4">
                {/* Social icons placeholders */}
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"><svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"><svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>© 2024 Obsidian OS Inc. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span>System Status: <span className="text-green-500">All systems operational</span></span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

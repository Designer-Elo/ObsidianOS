import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      <header className="py-6 border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-xl flex items-center gap-2">
             <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-orange-700 flex items-center justify-center">
                 <div className="w-4 h-4 bg-black rotate-45"></div>
             </div>
             Obsidian <span className="text-gray-400">OS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">For Teams</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Auth</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">Log In</a>
            <button className="bg-primary hover:bg-[#ff8553] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-[13px] text-gray-300 font-medium mb-8 backdrop-blur-sm">
            <span className="text-primary font-semibold">v 2.0</span>
            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
            The completely new Obsidian
          </div>

          {/* Heading */}
          <h1 className="text-[61px] leading-[1.1] font-semibold tracking-tight text-gradient mb-6 max-w-4xl">
            Built for the Ones Who Build
          </h1>

          {/* Subheading */}
          <p className="text-[20px] text-[#A1A1AA] max-w-2xl mb-10 leading-relaxed font-normal">
            A terminal that learns, lightning-fast AI assistance, all in one robust workspace.
          </p>

          {/* CTA */}
          <button className="bg-primary hover:bg-[#ff8553] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,113,53,0.4)]">
            Get Early Access
          </button>
        </div>
      </section>

      {/* Dashboard Mockup Placeholder */}
      <section className="container mx-auto px-6 pb-32">
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-surface aspect-[16/9] shadow-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <p className="text-gray-500 font-medium text-lg">Dashboard Mockup Placeholder</p>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container mx-auto px-6 pb-32">
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-[13px] text-primary font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#FF7135]"></div>
            FEATURES INCLUDED
          </div>
          <h2 className="text-[48px] leading-tight font-semibold tracking-tight text-white mb-4">
            Core Features
          </h2>
          <p className="text-[20px] text-[#A1A1AA] max-w-2xl font-normal">
            Everything you need to work faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-surface p-8 pt-10 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Fast as light.</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Built on Rust, compiled to WebAssembly. The entire UI responds in less than 50ms.
            </p>
            <div className="mt-auto h-[200px] rounded-xl border border-border bg-black/50 overflow-hidden flex items-center justify-center">
               <p className="text-sm text-gray-600">Code Editor UI Placeholder</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border bg-surface p-8 pt-10 flex flex-col relative overflow-hidden group">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Command Palette</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Control everything with just your keyboard. Press Cmd+K to access any tool or setting instantly.
            </p>
            <div className="mt-auto h-[200px] rounded-xl border border-border bg-black/50 overflow-hidden flex items-center justify-center">
               <p className="text-sm text-gray-600">Command Palette Placeholder</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-border bg-surface p-8 pt-10 flex flex-col relative overflow-hidden group">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Unmatched Security</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              End-to-end encryption by default. Your keys, your data. SOC2 Type II compliant.
            </p>
            <div className="mt-auto h-[200px] rounded-xl border border-border bg-black/50 overflow-hidden flex items-center justify-center">
               <p className="text-sm text-gray-600">Auth Flow Placeholder</p>
            </div>
          </div>

           {/* Card 4 */}
           <div className="rounded-2xl border border-border bg-surface p-8 pt-10 flex flex-col relative overflow-hidden group">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Multi-Cloud Access</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Connect to AWS, GCP, and Azure from a unified interface with zero configuration.
            </p>
            <div className="mt-auto h-[200px] rounded-xl border border-border bg-black/50 overflow-hidden flex items-center justify-center relative">
               {/* Decorative faint grid in background */}
               <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2}}></div>
               <p className="text-sm text-gray-600 relative z-10">Cloud Architecture Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Glow behind terminal section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
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
      <section className="container mx-auto px-6 py-32 flex flex-col items-center text-center">
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
      <section className="container mx-auto px-6 py-32 max-w-3xl flex flex-col items-center">
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
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <h2 className="text-[56px] leading-tight font-semibold tracking-tight text-white mb-6">
              Ready to Reprogram Your Workflow?
            </h2>
            <p className="text-[20px] text-[#A1A1AA] max-w-2xl font-normal mb-10">
              Join 10,000+ engineers building faster with ObsidianOS.
            </p>
            <button className="bg-primary hover:bg-[#ff8553] text-white px-10 py-4 rounded-md text-lg font-semibold transition-all shadow-[0_0_20px_rgba(255,113,53,0.3)] hover:shadow-[0_0_30px_rgba(255,113,53,0.5)]">
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
         <div className="container mx-auto px-6 py-16">
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
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"><svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"><svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></div>
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

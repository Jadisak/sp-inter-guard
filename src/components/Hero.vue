<template>
  <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-500/90 blur-[120px] z-10 rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-64 bg-emerald-500/90 blur-[100px] z-10 rounded-full pointer-events-none"></div>

  <section class="relative max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center overflow-hidden bg-url('/images/academy-06.png') bg-cover bg-center z-10">
    <div class="relative z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-400/50 border border-slate-700 mb-6 w-fit">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="text-xs font-medium text-emerald-400 tracking-wide uppercase">Available 24/7 Nationwide</span>
      </div>
      
      <h1 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
        Smart Security <br />
        <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
          For a Safer Future
        </span>
      </h1>
      
      <p class="mt-6 text-lg text-slate-400 max-w-lg leading-relaxed">
        <span class="text-white">S&P INTER GUARD</span> delivers premier security solutions, combining professional manpower with advanced surveillance technology for total peace of mind.
      </p>
      
      <div class="mt-10 flex xflex-wrap gap-4 borderx">
        <RouterLink to="/contact" class="px-3 lg:px-8 py-4 border border-indigo-400/70 bg-lime-500/60 hover:bg-emerald-300 hover:text-slate-900 xrounded-xl font-bold transition-all transform duration-700 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.9)]">
          Get a Quote
        </RouterLink>
        <RouterLink to="/services" class="px-3 lg:px-8 py-4 border border-indigo-400/70 bg-indigo-950/20 hover:bg-blue-700  text-white xrounded-xl font-semibold transition-all duration-700">
          Explore Services
        </RouterLink>
      </div>
    </div>
    
    <!-- Visual / Illustration Placeholder -->
    <div class="relative h-[400px] rounded-3xl bg-linear-to-tr from-slate-700 via-orange-300/60 via-15% to-slate-500 border border-slate-700 flex items-center justify-center overflow-hidden group shadow-2xl">
        <div class="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-100 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
        <div class="relative z-10 text-center p-0 -bottom-16">
            <h3 class="text-2xl font-bold text-white mb-2">Professional Guard</h3>
            <p class="text-slate-200">Trusted by top companies in Thailand</p>
        </div>
    </div>
  </section>
</template>
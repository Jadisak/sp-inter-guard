<template>
  <section class="px-8 py-20 relative">
    <div class="max-w-4xl mx-auto bg-linear-to-br from-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
       <!-- Glow effects -->
       <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
       <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

       <div class="relative z-10 flex flex-col items-center">
          <div class="w-16 h-16 bg-[#06C755]/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-[#06C755]/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-[#06C755]">
                <path d="M12 2C6.486 2 2 5.589 2 10.015c0 2.457 1.383 4.673 3.633 6.136-.16.559-.589 2.053-.675 2.378-.075.281-.035.549.208.736.243.187.643.142 1.956-.566 1.405-.758 2.049-1.378 2.112-1.442.92.25 1.892.385 2.89.385 5.514 0 10-3.589 10-8.015C22 5.589 17.514 2 12 2zm.178 12.333h-5.26c-.322 0-.583-.261-.583-.583 0-.323.261-.583.583-.583h5.26c.322 0 .583.261.583.583 0 .323-.261.583-.583.583zm2.5-2.5h-7.76c-.322 0-.583-.261-.583-.583 0-.322.261-.583.583-.583h7.76c.322 0 .583.261.583.583 0 .322-.261.583-.583.583zm0-2.5h-7.76c-.322 0-.583-.261-.583-.583 0-.322.261-.583.583-.583h7.76c.322 0 .583.261.583.583 0 .322-.261.583-.583.583z"></path>
            </svg>
          </div>

          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Need Immediate Security Support?</h2>
          <p class="text-slate-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Contact us directly via LINE Official for fast quotes, support, and inquiries. Our team is ready to assist you.
          </p>
          
          <a href="#" class="inline-flex items-center gap-3 px-8 py-4 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#06C755]/20 hover:shadow-[#06C755]/40 hover:-translate-y-1">
             <span>Add LINE Friend</span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
               <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
             </svg>
          </a>
       </div>
    </div>
  </section>
</template>
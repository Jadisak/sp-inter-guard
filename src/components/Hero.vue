<template>
  <!-- Background Decor -->
    <div ref="decor1" class="absolute top-0 right-0 w-1/3 h-full bg-blue-500/90 blur-[120px] z-10 rounded-full pointer-events-none opacity-0"></div>
    <div ref="decor2" class="absolute bottom-0 left-0 w-1/4 h-64 bg-emerald-500/90 blur-[100px] z-10 rounded-full pointer-events-none opacity-0"></div>

  <section ref="heroSection" class="relative max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12 items-center overflow-hidden bg-url('/images/academy-06.png') bg-cover bg-center z-10">
    <div class="relative z-10">
      <div ref="badge" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-400/50 border border-slate-700 mb-6 w-fit opacity-0">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="text-xs font-medium text-emerald-400 tracking-wide uppercase">{{ t.available }}</span>
      </div>
      
      <h1 ref="heading" class="text-4xl md:text-5xl font-semibold leading-tight tracking-tight opacity-0">
        {{ t.smartSecurity }} <br />
        <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-sky-300 via-30% to-green-300">
          {{ t.saferFuture }}
        </span>
      </h1>
      
      <p ref="description" class="mt-6 text-lg text-slate-400 max-w-lg leading-relaxed opacity-0">
        <span class="text-white">S&P INTER GUARD</span> {{ t.description }}
      </p>
      
      <div ref="ctaButtons" class="mt-10 flex xflex-wrap gap-4 borderx opacity-0">
        <RouterLink to="/contact" class="px-3 lg:px-8 py-4 border border-indigo-400/70 bg-lime-500/60 hover:bg-emerald-300 hover:text-slate-900 xrounded-xl font-bold transition-all transform duration-700 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.9)]">
          {{ t.getQuote }}
        </RouterLink>
        <RouterLink to="/services" class="px-3 lg:px-8 py-4 border border-indigo-400/70 bg-indigo-950/20 hover:bg-blue-700  text-white xrounded-xl font-semibold transition-all duration-700">
          {{ t.exploreServices }}
        </RouterLink>
      </div>
    </div>
    
    <!-- Visual / Illustration Placeholder -->
    <div ref="visualContainer" class="relative h-[400px] rounded-3xl bg-linear-to-tr from-slate-700 via-orange-300/20 via-15% to-slate-500 border border-slate-700 flex items-center justify-center overflow-hidden group shadow-2xl opacity-0 scale-95">
        <div class="absolute inset-0 bg-[url('/images/smart-security-hero.png')] bg-cover bg-center opacity-100 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
        <div class="relative z-10 text-center p-0 -bottom-16">
            <h3 class="text-xl font-semibold text-white mb-2 w-fit mx-auto px-3 py-1 border bg-white/20">{{ t.professionalGuard }}</h3>
            <p class="text-slate-200">{{ t.trusted }}</p>
        </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, useTemplateRef } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import gsap from 'gsap'

const { currentLanguage } = useLanguage()

const heroSection = useTemplateRef('heroSection')
const badge = useTemplateRef('badge')
const heading = useTemplateRef('heading')
const description = useTemplateRef('description')
const ctaButtons = useTemplateRef('ctaButtons')
const visualContainer = useTemplateRef('visualContainer')
const decor1 = useTemplateRef('decor1')
const decor2 = useTemplateRef('decor2')

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })

  tl.to([decor1.value, decor2.value], {
    opacity: 0.6,
    duration: 1.5,
    stagger: 0.3
  })
  .fromTo(badge.value, 
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=1.4"
  )
  .fromTo(heading.value,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.6"
  )
  .fromTo(description.value,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.5"
  )
  .fromTo(ctaButtons.value,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.4"
  )
  .fromTo(visualContainer.value,
    { scale: 0.95, opacity: 0, x: 30 },
    { scale: 1, opacity: 1, x: 0, duration: 1, ease: 'back.out(1.2)' },
    "-=0.7"
  )

  // Subtle floating animation for decor
  gsap.to(decor1.value, {
    y: 20,
    x: -10,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
  gsap.to(decor2.value, {
    y: -20,
    x: 10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
})

const translations = {
  EN: {
    available: 'Available 24/7 Nationwide',
    smartSecurity: 'Smart Security',
    saferFuture: 'For a Safer Future',
    description: 'delivers premier security solutions, combining professional manpower with advanced surveillance technology for total peace of mind.',
    getQuote: 'Get a Quote',
    exploreServices: 'Explore Services',
    professionalGuard: 'Professional Guard',
    trusted: 'Trusted by top companies in Thailand'
  },
  TH: {
    available: 'พร้อมให้บริการตลอด 24 ชั่วโมงทั่วประเทศ',
    smartSecurity: 'ความปลอดภัยอัจฉริยะ',
    saferFuture: 'เพื่ออนาคตที่ปลอดภัยกว่า',
    description: 'มอบโซลูชั่นความปลอดภัยชั้นนำ ผสานกำลังคนมืออาชีพกับเทคโนโลยีการตรวจตราขั้นสูงเพื่อความอุ่นใจสูงสุดของคุณ',
    getQuote: 'ขอใบเสนอราคา',
    exploreServices: 'ดูบริการของเรา',
    professionalGuard: 'การรักษาความปลอดภัย โดยมืออาชีพ',
    trusted: 'ได้รับความไว้วางใจจากบริษัทชั้นนำในประเทศไทย'
  }
}

const t = computed(() => translations[currentLanguage.value])
</script>
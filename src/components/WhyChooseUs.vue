<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLanguage } = useLanguage()

const translations = {
  EN: {
    title: 'Why Choose S&P INTER GUARD',
    subtitle: 'We combine rigorous training with modern technology to provide security you can rely on, day and night.',
    features: [
      {
        title: 'Licensed & Trained Guards',
        desc: 'Every guard undergoes strict background checks and intensive training programs to ensure the highest standards of protection.'
      },
      {
        title: '24/7 Supervision',
        desc: 'Our Operations Center monitors all sites around the clock, ensuring rapid response to any incidents or emergencies.'
      },
      {
        title: 'Modern Technology',
        desc: 'We integrate advanced surveillance and digital reporting tools to provide transparent and efficient security services.'
      }
    ]
  },
  TH: {
    title: 'ทำไมต้องเลือก S&P INTER GUARD',
    subtitle: 'เราผสานการฝึกอบรมที่เข้มงวดเข้ากับเทคโนโลยีทันสมัย เพื่อมอบความปลอดภัยที่คุณวางใจได้ทั้งกลางวันและกลางคืน',
    features: [
      {
        title: 'มีใบอนุญาตและผ่านการฝึกอบรม',
        desc: 'เจ้าหน้าที่ทุกคนผ่านการตรวจสอบประวัติอย่างละเอียดและเข้าคอร์สฝึกอบรมเข้มข้น เพื่อให้ได้มาตรฐานความปลอดภัยสูงสุด'
      },
      {
        title: 'การกำกับดูแลตลอด 24 ชม.',
        desc: 'ศูนย์ปฏิบัติการของเราเฝ้าระวังทุกพื้นที่ตลอดเวลา เพื่อให้มั่นใจว่าจะตอบสนองต่อเหตุฉุกเฉินได้อย่างรวดเร็ว'
      },
      {
        title: 'เทคโนโลยีทันสมัย',
        desc: 'เรานำระบบตรวจตราและเครื่องมือรายงานผลแบบดิจิทัลมาใช้ เพื่อความโปร่งใสและประสิทธิภาพในการรักษาความปลอดภัย'
      }
    ]
  }
}

const t = computed(() => translations[currentLanguage.value])
</script>

<template>
  <section class="px-8 py-24 bg-indigo-950/40 backdrop-blur-md relative overflow-hidden z-20">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="text-2xl md:text-4xl font-bold mb-6">{{ t.title }}</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          {{ t.subtitle }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
          <div class="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{{ t.features[0].title }}</h3>
          <p class="text-slate-400 leading-relaxed">
            {{ t.features[0].desc }}
          </p>
        </div>

        <!-- Card 2 -->
        <div class="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
          <div class="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 text-emerald-400">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{{ t.features[1].title }}</h3>
          <p class="text-slate-400 leading-relaxed">
            {{ t.features[1].desc }}
          </p>
        </div>

        <!-- Card 3 -->
        <div class="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
          <div class="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 text-cyan-400">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.788m13.788 0c3.808 3.808 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{{ t.features[2].title }}</h3>
          <p class="text-slate-400 leading-relaxed">
            {{ t.features[2].desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
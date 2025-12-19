<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLanguage } = useLanguage()

const translations = {
  EN: {
    title: 'Join Our Team',
    subtitle: 'We are looking for dedicated individuals to grow with us.',
    badge: 'Now Hiring',
    roleTitle: 'Security Guard Personnel',
    qualificationsTitle: 'Qualifications',
    qualifications: [
      'Age 18 - 55 years old',
      'Healthy and physically fit',
      'No criminal record',
      'No experience required (Training provided)'
    ],
    benefitsTitle: 'Benefits',
    benefits: [
      'Competitive salary',
      'Social Security',
      'Uniforms & Equipment'
    ],
    applyBtn: 'Apply Now',
    quoteWelcome: 'Welcoming the next generation of security professionals.',
    quoteTraining: 'Rigorous training ensures the highest standards of safety.',
    quoteSalute: 'Excellence in every detail, integrity in every action.'
  },
  TH: {
    title: 'ร่วมงานกับเรา',
    subtitle: 'เรากำลังมองหาบุคลากรที่มีความมุ่งมั่นเพื่อเติบโตไปพร้อมกับเรา',
    badge: 'เปิดรับสมัคร',
    roleTitle: 'พนักงานรักษาความปลอดภัย',
    qualificationsTitle: 'คุณสมบัติ',
    qualifications: [
      'ชาย/หญิง อายุ 18-55 ปี',
      'สุขภาพแข็งแรง',
      'ไม่มีประวัติอาชญากรรม',
      'ไม่จำเป็นต้องมีประสบการณ์ (มีฝึกอบรมให้)'
    ],
    benefitsTitle: 'สวัสดิการ',
    benefits: [
      'ค่าแรงมาตรฐาน / รายได้ดี',
      'ประกันสังคม',
      'ชุดเครื่องแบบและอุปกรณ์'
    ],
    applyBtn: 'สมัครเลย',
    quoteWelcome: 'ยินดีต้อนรับบุคลากรรุ่นใหม่สู่ทีมมืออาชีพ',
    quoteTraining: 'การฝึกอบรมเข้มข้น เพื่อมาตรฐานความปลอดภัยสูงสุด',
    quoteSalute: 'ทุกรายละเอียดคือความภูมิใจ ทุกการกระทำคือความซื่อสัตย์'
  }
}

const t = computed(() => translations[currentLanguage.value])

const currentSlide = ref(0)
const slides = computed(() => [
  { url: '/images/recruit-welcome.png', quote: t.value.quoteWelcome },
  { url: '/images/recruit-training.png', quote: t.value.quoteTraining },
  { url: '/images/recruit-salute.png', quote: t.value.quoteSalute }
])

let slideInterval = null

onMounted(() => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 5000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-8 py-24">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">{{ t.title }}</h2>
      <p class="text-slate-400 text-lg">{{ t.subtitle }}</p>
    </div>

    <div class="bg-indigo-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      <div class="grid md:grid-cols-2">
        <div class="p-10 md:p-14">
          <div class="inline-block px-3 py-1 bg-emerald-500/30 text-emerald-400 rounded-full text-sm font-semibold mb-6">
            {{ t.badge }}
          </div>
          <h3 class="text-3xl font-bold mb-6 text-white leading-tight">
            {{ t.roleTitle }}
          </h3>
          
          <div class="space-y-6 mb-10">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white">{{ t.qualificationsTitle }}</h4>
                <ul class="mt-2 space-y-1 text-slate-400 list-disc pl-4 text-sm">
                  <li v-for="(item, i) in t.qualifications" :key="i">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="flex items-start gap-4">
               <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-white">{{ t.benefitsTitle }}</h4>
                 <ul class="mt-2 space-y-1 text-slate-400 list-disc pl-4 text-sm">
                  <li v-for="(item, i) in t.benefits" :key="i">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

          <RouterLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all">
            {{ t.applyBtn }}
          </RouterLink>
        </div>

        <!-- Image Slider Side -->
        <div class="hidden md:block bg-slate-800 relative overflow-hidden h-full">
          <TransitionGroup name="fade">
            <div 
              v-for="(slide, index) in slides" 
              :key="index"
              v-show="currentSlide === index"
              class="absolute inset-0"
            >
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-5000 ease-linear"
                :class="currentSlide === index ? 'scale-110' : 'scale-100'"
                :style="{ backgroundImage: `url(${slide.url})` }"
              ></div>
              <div class="absolute inset-0 bg-linear-to-t from-black/90 via-50% via-black/10 to-black/5"></div>
              <div class="absolute bottom-10 w-full px-12 transition-all duration-700 delay-300"
                   :class="currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'">
                <p class="text-white text-center font-extralight text-2xl italic">{{ slide.quote }}</p>
                
                <!-- Dot indicators -->
                <div class="flex justify-center gap-2 mt-6">
                  <div 
                    v-for="(_, i) in slides" 
                    :key="i"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentSlide === i ? 'bg-white w-6' : 'bg-white/30'"
                  ></div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <section class="max-w-7xl mx-auto px-8 py-24 bg-gray-800/50x relative">
   <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-500/70 blur-[120px] z-10 rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-64 bg-white/60 blur-[100px] z-10 rounded-full pointer-events-none"></div>

     <div class="grid lg:grid-cols-2 gap-16 items-start z-20">
        <!-- Info Side -->
        <div>
           <div class="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-6">
            {{ t.badge }}
           </div>
           <h2 class="text-4xl md:text-5xl font-bold mb-8">{{ t.title }}</h2>
           <p class="text-slate-400 mb-12 text-lg leading-relaxed">
             {{ t.subtitle }}
           </p>
           
           <div class="space-y-8">
              <!-- Address -->
              <div class="flex gap-6 items-start">
                 <div class="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 ring-1 ring-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                 </div>
                 <div>
                    <h4 class="font-bold text-white text-lg mb-2">{{ t.headOffice }}</h4>
                    <p class="text-slate-400" v-html="t.address"></p>
                 </div>
              </div>

              <!-- Phone -->
              <div class="flex gap-6 items-start">
                 <div class="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 ring-1 ring-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                 </div>
                 <div>
                    <h4 class="font-bold text-white text-lg mb-2">{{ t.phoneTitle }}</h4>
                    <div class="space-y-1">
                      <p class="text-slate-400 hover:text-white transition-colors cursor-pointer">02-123-4567 (Office)</p>
                      <p class="text-slate-400 hover:text-white transition-colors cursor-pointer">081-234-5678 (Hotline)</p>
                    </div>
                 </div>
              </div>

              <!-- Email -->
              <div class="flex gap-6 items-start">
                 <div class="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 ring-1 ring-slate-700">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                 </div>
                 <div>
                    <h4 class="font-bold text-white text-lg mb-2">{{ t.emailTitle }}</h4>
                    <p class="text-slate-400">contact@spinterguard.com</p>
                 </div>
              </div>
           </div>
        </div>

        <!-- Form Side -->
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative">
           <!-- Form Glow -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"></div>

           <form class="space-y-6 relative z-10">
              <h3 class="text-2xl font-bold mb-6">{{ t.sendMsgTitle }}</h3>
              <div class="grid md:grid-cols-2 gap-6">
                 <div>
                    <label class="block text-sm font-medium text-slate-400 mb-2">{{ t.labelName }}</label>
                    <input class="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors placeholder-slate-600" :placeholder="t.placeholderName" />
                 </div>
                 <div>
                    <label class="block text-sm font-medium text-slate-400 mb-2">{{ t.labelPhone }}</label>
                    <input class="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors placeholder-slate-600" placeholder="+66 XX XXX XXXX" />
                 </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-400 mb-2">{{ t.labelEmail }}</label>
                 <input class="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors placeholder-slate-600" placeholder="john@company.com" />
              </div>

              <div>
                 <label class="block text-sm font-medium text-slate-400 mb-2">{{ t.labelMessage }}</label>
                 <textarea rows="4" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors placeholder-slate-600 resize-none" :placeholder="t.placeholderMsg"></textarea>
              </div>
              
              <button class="w-full py-4 bg-linear-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1">
                {{ t.btnSend }}
              </button>
           </form>
        </div>
     </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLanguage } = useLanguage()

const translations = {
  EN: {
    badge: 'Contact Us',
    title: 'Get in Touch',
    subtitle: 'Have questions about our security services? Reach out to us directly or fill out the form to request a consultation.',
    headOffice: 'Head Office',
    address: '123 Security Building, Rama 9 Road,<br>Bangkok 10310, Thailand',
    phoneTitle: 'Phone Support',
    emailTitle: 'Email',
    sendMsgTitle: 'Send us a Message',
    labelName: 'Full Name',
    labelPhone: 'Phone Number',
    labelEmail: 'Email Address',
    labelMessage: 'Message',
    placeholderName: 'John Doe',
    placeholderMsg: 'Tell us about your security needs...',
    btnSend: 'Send Message'
  },
  TH: {
    badge: 'ติดต่อเรา',
    title: 'ติดต่อสอบถาม',
    subtitle: 'มีคำถามเกี่ยวกับบริการรักษาความปลอดภัยของเราหรือไม่? ติดต่อเราได้โดยตรง หรือกรอกแบบฟอร์มเพื่อขอคำปรึกษา',
    headOffice: 'สำนักงานใหญ่',
    address: '123 อาคารซีเคียวริตี้ ถนนพระราม 9<br>กรุงเทพมหานคร 10310',
    phoneTitle: 'เบอร์โทรศัพท์ติดต่อ',
    emailTitle: 'อีเมล',
    sendMsgTitle: 'ส่งข้อความถึงเรา',
    labelName: 'ชื่อ-นามสกุล',
    labelPhone: 'เบอร์โทรศัพท์',
    labelEmail: 'อีเมล',
    labelMessage: 'ข้อความ',
    placeholderName: 'สมชาย รักดี',
    placeholderMsg: 'บอกเราเกี่ยวกับความต้องการด้านความปลอดภัยของคุณ...',
    btnSend: 'ส่งข้อความ'
  }
}

const t = computed(() => translations[currentLanguage.value])
</script>
<template>
  <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-500/90 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-64 bg-emerald-500/90 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
  <section class="px-8 py-20 max-w-6xl mx-auto">
    <!-- Title -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-extrabold">
        {{ t.title }}
      </h1>
      <p class="mt-6 text-slate-300 max-w-3xl mx-auto">
        {{ t.subtitle }}
      </p>
    </div>

    <!-- Company Overview -->
    <div class="grid md:grid-cols-2 gap-6 items-center mb-20 z-20">
      <div class="">
        <h2 class="text-3xl font-bold mb-4">{{ t.whoWeAreTitle }}</h2>
        <p class="text-slate-300 leading-relaxed">
          {{ t.whoWeAreText1 }}
        </p>
        <p class="mt-4 text-slate-300 leading-relaxed">
          {{ t.whoWeAreText2 }}
        </p>
      </div>

      <div class="h-80 bg-slate-900 border border-slate-600 shadow-xl hover:border-blue-500/30 transition-all rounded-2xl flex items-center justify-center text-slate-500 z-20 w-full relative">
        <p class="text-center text-white text-sm bottom-2 right-6 w-fit absolute py-1.5 px-2 bg-gray-500/60"><span class="text-center text-amber-300 text-xs">Marketing Director :</span>&nbsp;Chatwilai Panthong</p>
        <img src="/images/chatwilai.jpeg" alt="Office Photo" class="w-full h-full object-cover rounded-2xl">
      </div>
    </div>

    <!-- Vision & Mission -->
    <div class="grid md:grid-cols-2 gap-8 mb-20">
      <div class="p-8 bg-slate-900 border border-slate-800 shadow-xl hover:border-blue-500/30 transition-all rounded-2xl z-20">
        <h3 class="text-2xl font-bold mb-4">{{ t.visionTitle }}</h3>
        <p class="text-slate-300">
          {{ t.visionText }}
        </p>
      </div>

      <div class="p-8 bg-slate-900 border border-slate-800 shadow-xl hover:border-blue-500/30 transition-all rounded-2xl z-20">
        <h3 class="text-2xl font-bold mb-4">{{ t.missionTitle }}</h3>
        <ul class="list-disc pl-6 text-slate-300 space-y-2">
          <li v-for="(item, index) in t.missionList" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- Core Values -->
    <div class="z-50">
      <h2 class="text-3xl font-bold text-center mb-12">{{ t.valuesTitle }}</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(value, index) in t.values" :key="index" class="p-6 bg-slate-900 border border-slate-800 shadow-xl hover:border-blue-500/30 transition-all rounded-xl text-center">
          <h4 class="font-semibold mb-2">{{ value.title }}</h4>
          <p class="text-sm text-slate-400">
            {{ value.desc }}
          </p>
        </div>
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
    title: 'About S&P INTER GUARD',
    subtitle: 'A trusted security service provider in Thailand, delivering professional manpower, strict discipline, and modern security solutions.',
    whoWeAreTitle: 'Who We Are',
    whoWeAreText1: 'S&P INTER GUARD is a professional security company in Thailand, providing trained security guards, event protection, and corporate security services. Our operations are based on discipline, responsibility, and continuous supervision.',
    whoWeAreText2: 'We serve factories, offices, residential projects, construction sites, and special events with a strong focus on safety, prevention, and professionalism.',
    visionTitle: 'Our Vision',
    visionText: 'To be one of Thailand’s most trusted and professional security service providers, recognized for quality, reliability, and integrity.',
    missionTitle: 'Our Mission',
    missionList: [
      'Provide well-trained and disciplined security personnel',
      'Maintain strict supervision and operational standards',
      'Use modern security technology where appropriate',
      'Deliver confidence and peace of mind to our clients'
    ],
    valuesTitle: 'Our Core Values',
    values: [
      { title: 'Discipline', desc: 'Strict rules, punctuality, and professional conduct.' },
      { title: 'Responsibility', desc: 'Full responsibility for safety and assigned duties.' },
      { title: 'Reliability', desc: 'Clients can depend on us 24/7.' },
      { title: 'Professionalism', desc: 'Continuous training and performance improvement.' }
    ]
  },
  TH: {
    title: 'เกี่ยวกับ S&P INTER GUARD',
    subtitle: 'ผู้ให้บริการรักษาความปลอดภัยที่เชื่อถือได้ในประเทศไทย มอบกำลังพลมืออาชีพ วินัยเคร่งครัด และโซลูชั่นความปลอดภัยที่ทันสมัย',
    whoWeAreTitle: 'เราคือใคร',
    whoWeAreText1: 'S&P INTER GUARD คือบริษัทรักษาความปลอดภัยมืออาชีพในประเทศไทย ให้บริการเจ้าหน้าที่รักษาความปลอดภัยที่ผ่านการฝึกอบรม การดูแลความปลอดภัยงานอีเวนต์ และบริการความปลอดภัยสำหรับองค์กร การดำเนินงานของเรายึดมั่นในระเบียบวินัย ความรับผิดชอบ และการกำกับดูแลอย่างต่อเนื่อง',
    whoWeAreText2: 'เราให้บริการโรงงาน อาคารสำนักงาน โครงการที่อยู่อาศัย ไซต์งานก่อสร้าง และงานพิเศษต่างๆ โดยมุ่งเน้นความปลอดภัย การป้องกัน และความเป็นมืออาชีพ',
    visionTitle: 'วิสัยทัศน์ของเรา',
    visionText: 'เป็นหนึ่งในผู้ให้บริการรักษาความปลอดภัยที่น่าเชื่อถือและเป็นมืออาชีพที่สุดในประเทศไทย ได้รับการยอมรับในด้านคุณภาพ ความน่าเชื่อถือ และความซื่อสัตย์',
    missionTitle: 'พันธกิจของเรา',
    missionList: [
      'จัดหาบุคลากรด้านความปลอดภัยที่ผ่านการฝึกอบรมและมีระเบียบวินัย',
      'รักษามาตรฐานการกำกับดูแลและการปฏิบัติงานที่เข้มงวด',
      'ใช้เทคโนโลยีความปลอดภัยที่ทันสมัยตามความเหมาะสม',
      'มอบความมั่นใจและความอุ่นใจให้กับลูกค้าของเรา'
    ],
    valuesTitle: 'ค่านิยมหลักของเรา',
    values: [
      { title: 'วินัย', desc: 'กฎระเบียบที่เคร่งครัด ตรงต่อเวลา และความประพฤติแบบมืออาชีพ' },
      { title: 'ความรับผิดชอบ', desc: 'ความรับผิดชอบเต็มที่ต่อความปลอดภัยและหน้าที่ที่ได้รับมอบหมาย' },
      { title: 'ความน่าเชื่อถือ', desc: 'ลูกค้าสามารถพึ่งพาเราได้ตลอด 24 ชั่วโมง' },
      { title: 'ความเป็นมืออาชีพ', desc: 'การฝึกอบรมและปรับปรุงประสิทธิภาพอย่างต่อเนื่อง' }
    ]
  }
}

const t = computed(() => translations[currentLanguage.value])
</script>

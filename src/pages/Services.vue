<template>
  <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-500/90 blur-[120px] z-0 rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-64 bg-emerald-500/90 blur-[100px] z-0 rounded-full pointer-events-none"></div>

  <section class="px-8 py-20 max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold mb-12">{{ currentLanguage === 'EN' ? 'Our Services' : 'บริการของเรา' }}</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard 
        v-for="(service, index) in services[currentLanguage]"
        :key="index"
        :title="service.title" 
        :image="service.image"
        :description="service.description"
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLanguage } = useLanguage()

const services = {
  EN: [
    {
      title: "Security Guards",
      image: "/images/check-01.webp",
      description: "Professional, well-trained security personnel ready to protect your premises with strict discipline and 24/7 vigilance."
    },
    {
      title: "Event Security",
      image: "/images/check-02.webp",
      description: "Comprehensive crowd control and VIP protection for concerts, corporate events, and private gatherings."
    },
    {
      title: "Corporate Protection",
      image: "/images/check-03.webp",
      description: "Tailored security solutions for office buildings and corporate HQs, focusing on access control and safety."
    },
    {
      title: "Smart Surveillance",
      image: "/images/smart-surveillance.jpeg",
      description: "Integration of modern technology including CCTV monitoring and digital visitor management systems."
    },
    // Adding more items to match previous count if needed, or stick to the 3 distinct ones shown in user edit plus the 4th one I added earlier
  ],
  TH: [
    {
      title: "เจ้าหน้าที่รักษาความปลอดภัย",
      image: "/images/check-01.webp",
      description: "บุคลากรมืออาชีพที่ผ่านการฝึกอบรม พร้อมปกป้องสถานที่ของคุณด้วยวินัยที่เคร่งครัดและตื่นตัวตลอด 24 ชั่วโมง"
    },
    {
      title: "การรักษาความปลอดภัยงานอีเวนต์",
      image: "/images/vip.webp",
      description: "การควบคุมฝูงชนและการอารักขา VIP แบบครบวงจร สำหรับคอนเสิร์ต งานบริษัท และงานเลี้ยงส่วนตัว"
    },
    {
      title: "การคุ้มครององค์กร",
      image: "/images/check-03.webp",
      description: "โซลูชั่นความปลอดภัยที่ออกแบบเฉพาะสำหรับอาคารสำนักงานและสำนักงานใหญ่ โดยเน้นการควบคุมการเข้า-ออกและความปลอดภัย"
    },
    {
      title: "ระบบตรวจตราอัจฉริยะ",
      image: "/images/smart-surveillance.jpeg",
      description: "การผสานรวมเทคโนโลยีทันสมัย รวมถึงการตรวจสอบกล้องวงจรปิดและระบบบริหารจัดการผู้มาติดต่อแบบดิจิทัล"
    }
  ]
}
</script>
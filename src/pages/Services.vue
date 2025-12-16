<template>
  <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-500/90 blur-[120px] z-0 rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-64 bg-emerald-500/90 blur-[100px] z-0 rounded-full pointer-events-none"></div>

  <section class="px-8 py-20 max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold mb-12">Our Services</h2>
    <div class="grid md:grid-cols-4 gap-6">
      <ServiceCard 
        title="Security Guards" 
        description="Professional, well-trained security personnel ready to protect your premises with strict discipline and 24/7 vigilance."
      />
      <ServiceCard 
        title="Event Security" 
        description="Comprehensive crowd control and VIP protection for concerts, corporate events, and private gatherings."
      />
      <ServiceCard 
        title="Corporate Protection" 
        description="Tailored security solutions for office buildings and corporate HQs, focusing on access control and safety."
      />
      <ServiceCard 
        title="Smart Surveillance" 
        description="Integration of modern technology including CCTV monitoring and digital visitor management systems."
      />
      <ServiceCard 
        title="Security Guards" 
        description="Professional, well-trained security personnel ready to protect your premises with strict discipline and 24/7 vigilance."
      />
      <ServiceCard 
        title="Event Security" 
        description="Comprehensive crowd control and VIP protection for concerts, corporate events, and private gatherings."
      />
      <ServiceCard 
        title="Corporate Protection" 
        description="Tailored security solutions for office buildings and corporate HQs, focusing on access control and safety."
      />
      <ServiceCard 
        title="Smart Surveillance" 
        description="Integration of modern technology including CCTV monitoring and digital visitor management systems."
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
<template>
  <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-500/90 blur-[120px] z-0 rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-64 bg-emerald-500/90 blur-[100px] z-0 rounded-full pointer-events-none"></div>

  <section class="px-8 py-20 max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold mb-12">Our Services</h2>
    <div class="grid md:grid-cols-3 gap-3">
      <ServiceCard 
        title="Security Guards" 
        image="/images/check-01.webp"
        description="Professional, well-trained security personnel ready to protect your premises with strict discipline and 24/7 vigilance."
      />
      <ServiceCard 
        title="Event Security" 
        image="/images/check-02.webp"
        description="Comprehensive crowd control and VIP protection for concerts, corporate events, and private gatherings."
      />
      <ServiceCard 
        title="Corporate Protection" 
        image="/images/check-03.webp"
        description="Tailored security solutions for office buildings and corporate HQs, focusing on access control and safety."
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
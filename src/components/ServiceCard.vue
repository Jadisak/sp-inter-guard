<template>
    <div class="group p-0 bg-slate-500/50 rounded-2xl border border-slate-300/50 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 z-20 overflow-hidden">
      <!-- Icon Placeholder (Optional) -->
      <div v-if="icon" class="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-amber-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-500">
        <component :is="icon" class="w-6 h-6" />
      </div>
      <!-- Image -->
      <div v-if="image" class="mb-6">
        <img :src="image" alt="Service Image" class="w-full h-60 object-cover">
      </div>
      
      <!-- Title -->
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors px-3">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="text-slate-400 leading-relaxed text-sm px-3">
        {{ description }}
      </p>

      <!-- Learn More Link (Optional addition for 'premium' feel) -->
      <div class="mt-6 flex items-center text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-decoration-none px-3">
        Learn more <span class="ml-1">&rarr;</span>
      </div>
      
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: [Object, String],
    default: null
  },
  image: {
    type: String,
    default: null
  }
})
</script>

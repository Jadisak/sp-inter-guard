<template>
  <header class="px-0 py-0 bg-slate-900/30 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between pl-6 pr-8 border-b border-slate-800">
      <div class="flex items-center gap-2">
        <div class="w-20 h-20 flex items-center justify-center">
          <span><img src="/images/Badge-Arm.png" alt="Logo" class=""></span>
        </div>
        <span class="text-xl font-bold tracking-tight">S&P INTER GUARD</span>
      </div>

      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <router-link to="/" class="hover:text-white transition-colors">{{ t.home }}</router-link>
        <router-link to="/about" class="hover:text-white transition-colors">{{ t.about }}</router-link>
        <router-link to="/services" class="hover:text-white transition-colors">{{ t.services }}</router-link>
        <router-link to="/contact" class="hover:text-white transition-colors">{{ t.contact }}</router-link>
        <router-link to="/recruitment" class="hover:text-white transition-colors">{{ t.recruitment }}</router-link>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        <button @click="toggleLanguage" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700">
          <span :class="{'text-blue-400': currentLanguage === 'TH'}">TH</span>
          <span class="text-slate-600">/</span>
          <span :class="{'text-blue-400': currentLanguage === 'EN'}">EN</span>
        </button>
        
        <router-link to="/contact" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20">
          {{ t.getQuote }}
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-slate-300 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Dropdown -->
  <div v-if="isMenuOpen" class="md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-24 px-8">
     <div class="flex flex-col gap-6 text-lg font-medium text-slate-300">
        <div class="flex items-center justify-between">
          <span class="text-slate-400 text-sm">Language</span>
          <button @click="toggleLanguage" class="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm font-bold text-slate-300 border border-slate-700">
            <span :class="{'text-blue-400': currentLanguage === 'TH'}">TH</span>
            <span class="text-slate-600">/</span>
            <span :class="{'text-blue-400': currentLanguage === 'EN'}">EN</span>
          </button>
        </div>

        <router-link to="/" @click="isMenuOpen = false" class="hover:text-white transition-colors">{{ t.home }}</router-link>
        <router-link to="/about" @click="isMenuOpen = false" class="hover:text-white transition-colors">{{ t.about }}</router-link>
        <router-link to="/services" @click="isMenuOpen = false" class="hover:text-white transition-colors">{{ t.services }}</router-link>
        <router-link to="/contact" @click="isMenuOpen = false" class="hover:text-white transition-colors">{{ t.contact }}</router-link>
        <router-link to="/recruitment" @click="isMenuOpen = false" class="hover:text-white transition-colors">{{ t.recruitment }}</router-link>
        
        <div class="pt-6 border-t border-slate-800">
           <router-link to="/contact" @click="isMenuOpen = false" class="block w-full text-center px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20">
            {{ t.getQuote }}
          </router-link>
        </div>
     </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const isMenuOpen = ref(false)
const { currentLanguage, toggleLanguage } = useLanguage()

const translations = {
  EN: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    getQuote: 'Get a Quote',
    recruitment: 'Join Team'
  },
  TH: {
    home: 'หน้าแรก',
    about: 'เกี่ยวกับเรา',
    services: 'บริการของเรา',
    contact: 'ติดต่อเรา',
    getQuote: 'ขอใบเสนอราคา',
    recruitment: 'สมัครงาน'
  }
}

const t = computed(() => translations[currentLanguage.value])

</script>

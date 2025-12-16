import { ref } from 'vue'

const currentLanguage = ref('EN')

export function useLanguage() {
    const toggleLanguage = () => {
        currentLanguage.value = currentLanguage.value === 'EN' ? 'TH' : 'EN'
    }

    const setLanguage = (lang) => {
        if (['EN', 'TH'].includes(lang)) {
            currentLanguage.value = lang
        }
    }

    return {
        currentLanguage,
        toggleLanguage,
        setLanguage
    }
}

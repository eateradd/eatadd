import Vue from 'vue'
import VueI18n from 'vue-i18n'
 
import zh from './zh'
import en from './en'
 
Vue.use(VueI18n)
let lang = localStorage.getItem('lang') || 'zh'
// console.log(lang)
export default new VueI18n({
  locale: lang,
  messages: {
    zh,
    en
  },
  silentTranslationWarn: true,
})
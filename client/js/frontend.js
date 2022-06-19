import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'


Vue.component('loader', {
  template: `
              
            `
})

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      form: {
        mahsulot: '',
        son: '',
        manzil: '',
        telefon: ''
      },
      
    }
  },
  computed: {
   
  },
  methods: {
   
    
  }
})

async function request(url, method = 'GET', data = null) {
  try {
    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    })
    return await response.json()
  } catch (e) {
    console.warn('Error:', e.message)
  }
}

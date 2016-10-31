import Vue from 'vue'

export function getAPConfig (context) {
  let promise = new Vue.Promise((resolve, reject) => {
    context.$http.get('/api/wifi/ap')
      .then((response) => response.json())
      .then((json) => {
        resolve(json)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return promise
}

export function saveAPConfig (context, ssid, pass) {
  var formData = new window.FormData()
  formData.append('ap_ssid', ssid)
  formData.append('ap_password', pass)
  let promise = new Vue.Promise((resolve, reject) => {
    context.$http.post('/api/wifi/ap', formData)
      .then((response) => response.json())
      .then((json) => {
        resolve(json)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return promise
}

export function getAccessPoints (context) {
  // to be tested
  let promise = new Vue.Promise((resolve, reject) => {
    let list = []
    let fin = []
    let runner = 0
    let out = {}
    const loopto = 5
    let calling = 0
    var _interval = setInterval(() => {
      console.log('calling...')
      if (calling++ >= loopto - 1) {
        console.log('clear interval again', _interval)
        clearInterval(_interval)
      }
      context.$http.get('/api/wifi').then((response) => response.json())
        .then((aps) => {
          runner++
          console.log('runner=', runner)
          list.push(aps)
          if (runner === loopto) {
            console.log('runner', runner)
            for (let _aps of list) {
              _aps.forEach((v, k) => {
                out[v.name] = k
              })
            }
            for (let it of Object.keys(out)) {
              fin.push({name: it})
            }
            resolve(fin)
          }
        })
        .catch((error) => {
          runner++
          console.log('eroro', error.status, error)
          reject(error)
        })
    }, 1000)
  })

  return promise
}

export function saveWiFiConfig (context, ssid, pass) {
  var formData = new window.FormData()
  formData.append('sta_ssid', ssid)
  formData.append('sta_password', pass)
  let promise = new Vue.Promise((resolve, reject) => {
    context.$http.post('/api/wifi/sta', formData).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
  return promise
}

// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
// const lazyLoading = (name, index = false) => () => System.import(`views/${name}${index ? '/index' : ''}.vue`)

export default [
  // {
  //   name: 'Dashboard',
  //   path: '/dashboard',
  //   meta: {
  //     icon: 'fa-tachometer'
  //   },
  //   component: require('../views/dashboard')
  // },
  {
    name: 'WiFi Configuration',
    path: '/wifi',
    meta: {
      icon: 'fa-wifi',
      expanded: true
    },
    component: require('../views/charts'),

    children: [
      {
        name: 'AP',
        path: 'ap',
        component: require('../views/wifi/Form')
      },
      {
        name: 'STA',
        path: 'sta',
        component: require('../views/dashboard')
      }
    ]
  },
  {
    name: 'Configurations',
    path: '/ntp',
    meta: {
      icon: 'fa-life-saver',
      expanded: false
    },
    component: require('../views/charts'),
    children: [
      {
        name: 'NTP',
        path: 'general',
        component: require('../views/wifi/Form')
      },
      {
        name: 'MQTT',
        path: 'mqtt',
        component: require('../views/wifi/Form')
      },
      {
        name: 'Deep Sleep',
        path: 'sleep',
        component: require('../views/wifi/Form')
      }
    ]
  }
]

// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
// const lazyLoading = (name, index = false) => () => System.import(`views/${name}${index ? '/index' : ''}.vue`)

export default [
  {
    name: 'Dashboard',
    path: '/dashboard',
    meta: {
      icon: 'fa-tachometer'
    },
    component: require('../views/dashboard')
  },
  {
    name: 'Charts',
    path: '/charts',
    meta: {
      icon: 'fa-bar-chart-o',
      expanded: false
    },
    component: require('../views/charts'),

    children: [ ]
  }
]

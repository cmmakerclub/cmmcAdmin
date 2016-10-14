<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">One</p>
        <p class="subtitle">Subtitle</p>
      </article>
    </div>
  </div>
</template>

<script>
import Chart from '../../ui/Chart'

export default {
  components: {
    Chart
  },

  data () {
    return {
      data: [300, 50, 100]
    }
  },

  computed: {
    chartData () {
      return {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          data: this.data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      }
    }
  },

  created () {
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      // this.data.unshift(this.data.pop())
      this.data.forEach((item, i) => {
        this.data.$set(i, Math.ceil(Math.random() * 1000))
      })
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
</style>

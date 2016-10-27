<template>
  <div class="content">
    <section class="section">
      <div class="columns">
        <div class="column">
          <div class="heading">
            <h1 class="title">STA Configuration</h1>
          </div>
          <p class="control" v-bind:class="{ 'is-loading': loading}">
              <span class="select">
                <select v-model="selected">
                    <option v-for="option in access_points" v-bind:value="option.name">
                        {{ option.name }}
                    </option>
                </select>

              </span>
          </p>
          <p class="control">You Select: {{ selected }}</p>
          <p class="control">APS: {{ access_points }}</p>
          <label class="label">Password</label>
          <p class="control has-icon">
            <input class="input" type="password" placeholder="Password">
            <i class="fa fa-lock"></i>
          </p>
          <p class="control">
            <button class="button is-primary">Submit</button>
            <button class="button is-link">Cancel</button>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {getAccessPoints} from '../../api'
  export default {
    components: {},

    props: {},
    data () {
      getAccessPoints((err, post) => {
        this.loading = true
        if (err) {
          console.log(err)
        } else {
          this.post = post
        }
      })
      return {
        loading: false,
        access_points: {},
        selected: ''
      }
    },

    mounted () {
      console.log('mounted')
      setInterval(() => {
        this.loading = true
        getAccessPoints((err, aps) => {
          if (err) {
            console.log(err)
          } else {
            this.loading = false
            this.access_points = aps
          }
        })
      }, 5000)
    }
  }
</script>

<style scoped>
  .button {
    margin: 5px 0 0;
  }

  .control .button {
    margin: inherit;
  }
</style>

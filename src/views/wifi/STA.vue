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
            <button class="button is-primary" v-on:click="onSubmit">Submit</button>
            <button class="button is-link">Cancel</button>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {saveWiFiConfig, getAccessPoints} from '../../api'
  export default {
    components: {},
    props: {},
    methods: {
      onSubmit () {
        let context = this
        saveWiFiConfig(context, '..@  PCS Staff', '@PinnStaff')
          .then((resp) => resp.json())
          .then((json) => { console.log(json) })
      },
      fetchAPs () {
        let context = this
        this.loading = true
        getAccessPoints(context).then((aps) => {
          console.log(aps)
          this.loading = false
          this.access_points = aps
        })
      }

    },
    data () {
      return {
        loading: true,
        access_points: {},
        selected: ''
      }
    },

    mounted () {
      console.log('mounted')
      console.log('=>', this.fetchAPs())
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

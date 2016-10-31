<template>
  <div class="content">
    <section class="section">
      <div class="columns">
        <div class="column">
          <div class="heading">
            <h1 class="title">STA Configuration</h1>
          </div>
          <p class="control" v-bind:class="{'is-loading': loading}">
              <span class="select">
                <select v-model="selected">
                    <!--<option value="" disabled ssid hidden>Please Choose</option>-->
                    <option v-for="(val, idx) in access_points">
                      {{ val.name }}
                    </option>
                </select>
              </span>
            <a class="button" v-bind:class="{ 'is-loading': loading}" v-on:click="onRefresh">
                <span class="icon is-small">
                  <i class="fa fa-refresh"></i>
                </span>
              <span>Refresh</span>
            </a>
          </p>
          <!--<p class="control">APS: {{ access_points }}</p>-->
          <label class="label">Password</label>
          <p class="control has-icon">
            <input class="input" type="password" placeholder="Password">
            <i class="fa fa-lock"></i>
          </p>
          <p class="control">
            <button v-bind:class="{'is-disabled': loading}" class="button is-primary"
                    v-on:click="onSubmit">Submit
            </button>
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
      onRefresh () {
        this.reload()
      },
      onSubmit () {
        let context = this
        saveWiFiConfig(context, '..@  PCS Staff', '@PinnStaff')
          .then((resp) => resp.json())
          .then((json) => {
            console.log(json)
          })
      },
      fetchAPs () {
        let context = this
        getAccessPoints(context).then((aps) => {
          aps.forEach((ap, k) => {
            this.map.set(ap.name, ap)
          })
          this.access_points = []
          for (let [key, value] of this.map) {
            this.access_points.push(value)
            this.loading = false
            this.ssid = this.access_points[0].name
          }
        })
      }
    },
    data () {
      return {
        loading: true,
        access_points: [],
        ssid: null
      }
    },
    computed: {
      now: function () {
        return Date.now()
      }
    },
    created () {
      this.map = new Map()
      this.reload = () => {
        this.loading = true
        this.fetchAPs()
      }
    },
    mounted () {
      console.log('mounted')
      this.reload()
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

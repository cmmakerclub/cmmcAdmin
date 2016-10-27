<template>
  <div class="content">
    <section class="section">
      <div class="columns">
        <div class="column">
          <div class="heading">
            <h1 class="title">AP Configuration</h1>
          </div>
          <label class="label">AP</label>
          <p class="control has-icon">
            <input class="input" placeholder="AP Name">
            <i class="fa fa-wifi"></i>
          </p>
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
  import {getPost} from '../../api'
  export default {
    components: {},

    props: {},

    data () {
      console.log('data')
      getPost(1, (err, post) => {
        this.loading = true
        if (err) {
          console.log(err)
        } else {
          this.post = post
        }
      })
      return {
        loading: false,
        post: {},
        selected: ''
      }
    },

    mounted () {
      console.log('mounted')
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

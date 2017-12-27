<template>
  <div>
    <h1>Register</h1>
    <form method="POST" @submit.prevent="onSubmit">
      <div class="field">
        <div class="control">
          <div class="select">
            <select v-model="node">
              <option v-for="item in nodes" v-bind:value="item.value" v-text="item.key"></option>
            </select>
          </div>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Register</button>
        </div>
        <div class="control">
          <button class="button is-link" @click="resolve">Resolve</button>
        </div>
      </div>
    </form>
    <div class="notification is-success" v-if="response != ''" v-text="response">
    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    name: 'register',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        nodes: [
          {key: 'node1', value: '0'},
          {key: 'node2', value: '1'},
          {key: 'node3', value: '2'}
        ],
        node: '',
        response: ''
      }
    },
    methods: {
      onSubmit () {
        axios
          .post(`http://localhost:5000/nodes/register`, {
            nodes: [`http://localhost:500${this.node}`]
          })
          .then((response) => {
            console.log(response)
            this.response = response.data.message
          })
          .catch((err) => {
            console.error(err)
          })
      },
      resolve () {
        axios
          .get(`http://localhost:5000/nodes/resolve`)
          .then((response) => {
            console.log(response)
            this.response = response.data.message
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
  }
</script>

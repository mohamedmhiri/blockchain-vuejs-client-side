<template>
  <div>
    <h1>Add New Transaction</h1>
    <form method="POST" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Sender</label>
        <div class="control">
          <input class="input" type="text" v-model="sender" placeholder="sender@mail.com">
        </div>
      </div>

      <div class="field">
        <label class="label">Recepient</label>
        <div class="control">
          <input class="input" type="text" v-model="recipient" placeholder="recepient@mail.com">
        </div>
      </div>
      <div class="field">
        <label class="label">Amount</label>
        <div class="control">
          <input class="input" type="text" v-model="amount" placeholder="xx..xx">
        </div>
      </div>
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
          <button class="button is-link">Add Transaction</button>
        </div>
        <div class="control">
          <button class="button is-link" @click="mine">Mine</button>
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
    name: 'new-transaction',
    data () {
      return {
        sender: '',
        recipient: '',
        amount: '',
        nodes: [
          {key: 'node1', value: '0'},
          {key: 'node2', value: '1'},
          {key: 'node3', value: '2'}
        ],
        node: '',
        response: '',
        error: ''
      }
    },
    methods: {
      onSubmit () {
        axios
          .post(`http://localhost:500${this.node}/transactions/new`, {
            sender: this.$data.sender,
            recipient: this.$data.recipient,
            amount: this.$data.amount
          })
          .then((response) => {
            this.response = response.data.message
            console.log(response)
          })
          .catch((err) => {
            console.error(err)
          })
      },
      mine () {
        axios
          .get(`http://localhost:500${this.node}/mine`)
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

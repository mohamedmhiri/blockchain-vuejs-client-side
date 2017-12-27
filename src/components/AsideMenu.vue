<template>
  <aside class="menu">
    <h1 class="menu-label">
      Blockchain App
    </h1>
    <ul class="menu-list">
      <li><a @click="navTo('/')">Home</a></li>
      <li><a @click="navTo('/new-transaction')">New Transaction</a></li>
      <li><a @click="navTo('/chain')">Chain</a></li>
      <li><a @click="navTo('/resolve')">Resolve</a></li>
      <li><a @click="navTo('/register')">Register</a></li>
    </ul>
  </aside>
</template>
<script>
  export default {
    name: 'aside-menu',
    methods: {
      navTo (url) {
        this.$router.push(url)
      }

    },
  }
</script>

<template>
  <div class="tile is-ancestor">
    <div class="tile is-2 is-vertical is-parent">
      <div class="tile is-child box">
        <aside-menu></aside-menu>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box">
        <h1 class="title">Blockchain App!</h1>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import AsideMenu from './AsideMenu'
  export default {
    name: 'container',
    components: {AsideMenu},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

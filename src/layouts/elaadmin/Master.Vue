<template>
  <!-- Main wrapper  -->
  <div id="main-wrapper">
    <header-bar/>
    <side-bar />
    <!-- Page wrapper  -->
    <div class="page-wrapper">
      <slot />
      <footer-bar />
    </div>
  </div>
</template>

<script>
import HeaderBar from './bars/HeaderBar'
import SideBar from './bars/SideBar'
import FooterBar from './bars/FooterBar'
export default {
  name: 'Master',
  components: {
    HeaderBar,
    SideBar,
    FooterBar
  }
}
</script>

<style>
</style>

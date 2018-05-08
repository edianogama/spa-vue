<template>
  <div class="corpo">
   <nprogress-container></nprogress-container>
    <main-menu :routes="routes" />
    <transition name="page">
      <router-view></router-view>  
    </transition>
  </div>
</template>
<script>
import {routes} from './routes'
import mainMenu from './components/shared/menu/Menu.vue'
import NprogressContainer from './components/shared/vue-ngprogress/NprogressContainer.vue'

export default {
  components: {
      'main-menu': mainMenu,
      NprogressContainer
  },
  data(){
    return {
      routes,
    }
  }
}
</script>
<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
 .page-enter-active, .page-leave-active{
      transition: opacity .5s;
  }
  .page-enter, .page-leave-to{
      opacity: 0;
  }
</style>
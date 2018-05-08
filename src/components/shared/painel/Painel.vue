<template>
  <div class="painel">
      <h2 class="painel-titulo"  @click="visible = !visible">{{ titulo }}</h2>
      <transition name="painel-fade">
        <div v-show="visible">
          <slot class="painel-conteudo"></slot>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  props: ['titulo'],
  data() {
    return {
      visible:true
    }
  }
}

</script>

<style scoped>
* {
  box-shadow: 1px 1px 1px #000;
}
 .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  .painel-fade-enter, .painel-fade-enter-active{
     opacity: 0;
  } /*estado atual*/

  .painel-fade-enter-active, .painel-fade-leave-active{
    transition: opacity .9s;
  }
</style>
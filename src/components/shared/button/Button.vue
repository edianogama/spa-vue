<template>
    <button :type="tipo" @click="confirmacao()" class="button" :class="estiloBotao">{{rotulo}}</button>
</template>
<script>
export default {
  props:{
      tipo:{
          required: true,
          type: String
      },
      rotulo: {
          required:true,
          type: String
      },
      confirm: Boolean,
      estilo: {
          required:true,
          type: String
      }
  },
  computed: {
      estiloBotao(){
          if(this.estilo == 'default' || !this.estilo) return "button-default";
          if(this.estilo == 'danger') return "button-danger";
      }
  },
  methods: {
      confirmacao(){
          if(this.confirm){
            if(confirm("Deseja remover ? ")){
                this.$emit('confirmDialog');
            }
          }
      }
  }
}
</script>
<style scoped>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-default {
        background: darkcyan;
        color: white;
    }
</style>

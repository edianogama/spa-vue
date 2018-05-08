<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <div class="filter">
      <input type="text" name="filtro" class="filtro" @input="filtro = $event.target.value">
    </div>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in filtroFoto">
        <meu-painel :titulo="foto.titulo">
          <image-responsiva :url="foto.url" :titulo="foto.titulo"></image-responsiva>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue'

export default {
  components: {
    'meu-painel': Painel,
    'image-responsiva': ImagemResponsiva
  },
  data() {
    return {
      titulo: 'Alurapic', 
      fotos: [],
      filtro: '',
    }
  },
  computed: {
    filtroFoto(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },
  created(){ 
      this.$http.get('http://localhost:3000/v1/fotos')
      .then(resp => resp.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));

  }
}

</script>

<style>
  .filter{ 
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
  }
  .filter input {
    width: 100%;
  }
  .centralizado {
    text-align: center;
  }
  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

</style>
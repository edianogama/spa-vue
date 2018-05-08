<template>
   <nav class="menu">
      <ul>
        <li v-for="route in routes"><router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link></li>
      </ul>
    </nav>
</template>
<script>
    export default {
        props: {
            routes: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style scoped>
  .menu ul li { display: inline; margin: 0 4px; }
  .menu ul li a { color: black; text-decoration: none; border: 1px solid black;  padding: 10px; width: 100%;}
  .menu ul li a:hover {background:black; color: white; }
 
</style>

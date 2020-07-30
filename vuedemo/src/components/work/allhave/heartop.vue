<template>
    <div class="hear-top">
      <slot name="heartop" class="hear-top" >{{title}}</slot>
    </div>
</template>

<script>
    export default {
      name: "heartop",
      props:{
        title: ''
      }
    }
</script>

<style scoped>
  .hear-top{
    background-color: aliceblue;
    overflow: hidden;
    padding: 5px;
    font-size: 20px;
  }
</style>

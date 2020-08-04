<template>

  <div class="hello">
  <Checkbox-group :model.sync="social">
  <Checkbox value="twitter":disabled="false">
  <Icon type="social-twitter"></Icon>
  <span>Twitter</span>
  </Checkbox>
  <Checkbox value="facebook":disabled="true">
  <Icon type="social-facebook"></Icon>
  <span>Facebook</span>
  </Checkbox>
  <Checkbox value="github">
  <Icon type="social-github"></Icon>
  <span>Github</span>
  </Checkbox>
  <Checkbox value="snapchat">
  <Icon type="social-snapchat"></Icon>
  <span>Snapchat</span>
  </Checkbox>
  </Checkbox-group>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<!--Add"scoped"attributetolimitCSStothiscomponentonly-->
<style scoped>
  h1,h2{
  font-weight:normal;
  }
  ul{
  list-style-type:none;
  padding:0;
  }
  li{
  display:inline-block;
  margin:010px;
  }
  a{
  color:#42b983;
  }
  </style>

<template>
  <div class="hello">
    <Checkbox-group :model.sync="social">
      <Checkbox value="twitter">
        <Icon type="social-twitter"></Icon>
        <span>Twitter</span>
      </Checkbox>
      <Checkbox value="facebook">
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
    <Checkbox-group :model.sync="fruit">
      <Checkbox value="香蕉"></Checkbox>
      <Checkbox value="苹果"></Checkbox>
      <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

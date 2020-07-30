<template>
  <div id="topa">
    <Row id="work" style="height: 50px">
      <i-col span="8">logo</i-col>
      <i-col span="7">col-12</i-col>
      <i-col span="8">
        <span>
          <i-col span="4">
            <Icon type="search" size="20" @click=""></Icon>
          </i-col>
          <i-col span="20">
            <i-input :value.sync="value" placeholder="请输入..." style="width: 150px; position:relative; top: -6px;"></i-input>
          </i-col>
        </span>
      </i-col>
      <i-col span="1">
        <Badge count="0" overflow-count="100">
          <Icon type="ios-bell-outline" size="26"></Icon>
        </Badge>
      </i-col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "topa"
    }
</script>

<style scoped>
  #topa {
    margin-top: 0px;
    margin-left: 0px ;
  }
  #work{
    background-color: cornflowerblue;
    padding-top: 10px;
    padding-left: 10px;
  }
  row{
    height: 60px;
  }
</style>

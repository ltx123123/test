<template>
  <div>
    <div style="height: 100px;">
      ltx的技术测试平台
    </div>
    <div style="height: 500px;background-color: ivory;" >
      <i-col span="9" offset="15">
        <Card :bordered="true" style="height: 340px;width: 300px;position: relative;top: 40px;">
          <p slot="title">登录</p>
          <div>
            <div>
              <i-form :model="formItem" :label-width="50">
                <Form-item label="账号">
                  <i-input :value.sync="formItem.userName" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="密码">
                  <i-input type="password" :value.sync="formItem.password" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item>
                  <!--                  <i-button type="primary" style="width: 153.2px">提交</i-button>-->
                  <i-col span="12" offset="12"><a @click="">忘记密码</a>|<a @click="">修改密码</a></i-col>
                </Form-item>
                <Form-item>
                  <i-button type="warning" style="width: 153.2px" @click="doLogin">提交</i-button>
                </Form-item>
                <Form-item>
                  <i-col span="4" offset="20" @click=""><a>注册</a></i-col>
                </Form-item>
              </i-form>
            </div>
          </div>
        </Card>
      </i-col>
    </div>
  </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>

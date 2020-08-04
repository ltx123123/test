<template>
  <div  ref="login">
    <div style="height: 100px;">
      ltx的技术测试平台
    </div>
    <div style="height: 500px;background-color: ivory;" >
      <i-col span="9" offset="15">
        <Card :bordered="true" style="height: 340px;width: 300px;position: relative;top: 40px;">
          <p slot="title">登录</p>
          <div>
            <div>
              <Form :model="formItem" :labelWidth="50">
                <FormItem label="账号">
                  <input :value.sync="formItem.userName" placeholder="请输入"></input>
                </FormItem>
                <FormItem label="密码">
                  <input type="password" :value.sync="formItem.password" placeholder="请输入"></input>
                </FormItem>
                <FormItem>
                  <Col span="5" offset="12" @click=""><a style="font-size: 0.5px;">忘记密码</a></Col><Col span="5" @click="">|<a style="font-size: 0.5px;">修改密码</a></Col>
                </FormItem>
                <FormItem>
                  <button type="warning" style="width: 153.2px" @click="doLogin">提交</button>
                </FormItem>
                <FormItem>
                  <Col span="4" offset="20" @click=""><a>注册</a></col>
                </FormItem>
              </Form>
            </div>
          </div>
        </Card>
      </i-col>
    </div>
    <div style="height: 100px;">
        madeby ltx
    </div>

  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        formItem: {
          userName: '',
          password: ''
        }
      }
    },
    methods: {
      doLogin: function () {
        console.log("111")
      }
    }
  };
</script>

<style scoped>
  .body{
    text-align:center
  }
</style>

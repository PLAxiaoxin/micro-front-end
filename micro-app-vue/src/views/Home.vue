<template>
  <div>
    <h3>
      Vue 子应用 
    </h3>
    <div v-if="token" style="background-color: grren"> 
      获得主应用传过来的的数据
      {{
        token.data
      }}
    </div> 
  </div>
</template>

<script>
import actions from '../actions'
export default {
  name: "From",
  data(){
    return {
      token: null
    }
  },
  mounted() {
    console.log('vue/home执行了')
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      const { token } = state;
      // 未登录 - 返回主页
      if (!token) {
        this.$message.error("未检测到登录信息！");
        return this.$router.push("/");
      }

      // 获取用户信息
      console.log('从主应用拿到的信息',token);
      this.token = token;
    }, true);
  },
};
</script>
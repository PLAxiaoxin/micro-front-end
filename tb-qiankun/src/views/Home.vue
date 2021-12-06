<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your 主应用" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import actions from '../actions'

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted(){
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState)=>{
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
    });
    this.login();
  },
  methods:{
    login(){
      setTimeout(()=>{
        let token = {
          data:{
            code: 200,
            data: '成功'
          }
        }
        // 模拟登录成功后，设置 token
        actions.setGlobalState({ token });
        console.log('设置成功');
        this.$router.push("/vue");
      },3000);
    }
  }
};
</script>

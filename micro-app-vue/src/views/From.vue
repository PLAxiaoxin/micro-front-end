<template>
  <div>
    <input type="text" v-model="msg"/>

  </div>
</template>

<script>
export default {
  name: "From",
  data(){
    return {
      msg:''
    }
  }
};
</script>
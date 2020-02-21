<template>
  <header>
    <div class="header-left" @click="toHome">
      <i class="iconfont">&#xe6fe;</i>
    </div>
    <div class="header-title">活动详情</div>
    <div class="header-right">
      <i class="iconfont">&#xe64d;</i>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
header {
  height: 1.2rem;
  font-size: 0.45rem;
  font-weight: 500;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left {
  padding-left: 0.5rem;
}
.header-right {
  padding-right: 0.5rem;
}
</style>
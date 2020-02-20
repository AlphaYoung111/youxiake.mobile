<template>
  <footer>
    <a href>
      <img src="@/assets/img/footer1.png" alt />
      <span>首页</span>
    </a>
    <a href>
      <img src="@/assets/img/footer2.png" alt />
      <span>订单</span>
    </a>
    <a href>
      <img src="@/assets/img/footer3.png" alt />
      <span>个人中心</span>
    </a>
  </footer>
</template>
<script>
export default {}
</script>
<style scoped>
footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99999;
  background-color: #fff;
  height: 1.466666rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer a {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
footer a img {
  width: 0.72rem;
  height: 0.72rem;
  display: block;
}
footer a span {
  display: block;
  font-size: 0.35rem;
  margin-top: .2rem;
}
</style>
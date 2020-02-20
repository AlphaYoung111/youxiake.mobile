<template>
  <div class="scroll">
    <div class="scroll-content">
      <div class="scroll-right">
        <ul class="{animated:animate}">
          <li v-for="item in scrollList" :key="item.id">
            <img src="@/assets/img/scroll.png" alt />
            {{item.title}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sroll',
  data() {
    return {
      scrollList: [
        {
          id: 0,
          title: '清迈旅游落地签如何搞定？360°带你了解泰北小城清迈'
        },
        {
          id: 1,
          title: '港珠澳大桥怎么走？穿梭巴士预约及过关全攻略'
        },
        {
          id: 2,
          title: '穿梭巴士预约及过关全攻略'
        },
        {
          id: 3,
          title: '清迈旅游落地签如何搞定？'
        },
        {
          id: 4,
          title: '港珠澳大桥怎么走？穿梭巴士预约及过关全攻略'
        },
        {
          id: 5,
          title: '360°带你了解泰北小城清迈'
        }
      ],
      animate: false
    }
  },
  mounted() {
    setInterval(() => {
      this.timeScroll()
    }, 2000)
  },
  methods: {
    timeScroll() {
      this.animate = true
      setTimeout(() => {
        this.scrollList.push(this.scrollList[0])
        this.scrollList.shift()
        this.animate = false
      }, 500)
    }
  }
}
</script>
<style scoped>
.animated {
  transition: all 0.5s;
  margin-top: -0.6666666rem;
}
.scroll {
  padding: 0.3rem 0;
}
.scroll-content {
  background: url('/img/scroll.png') no-repeat;
  background-size: 100%;
  width: 100%;
  height: 1.3333rem;
  position: relative;
  overflow: hidden;
}
.scroll-right {
  position: absolute;
  height: 1.33333rem;
  width: 8.13333rem;
  right: 0;
}
li {
  font-size: 0.35rem;
  color: #333;
  line-height: 0.6666666rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
li img {
  width: 0.16rem;
  height: 0.16rem;
}
</style>
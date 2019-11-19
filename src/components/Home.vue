<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/home">TC论坛</el-menu-item>
        <el-menu-item index="/firstPage">首页</el-menu-item>
        <el-menu-item index="/tuCao">吐槽</el-menu-item>
        <el-menu-item index="3" disabled>功能2</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">功能3</a>
        </el-menu-item>
        <span>登录</span>
        <span>退出</span>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, 'path' + keyPath)
    }
  }
}
</script>
<style scoped>
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #ffffff;
  color: #111;
  text-align: center;
  line-height: 60px;
}
</style>

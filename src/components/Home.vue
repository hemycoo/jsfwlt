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
        <el-menu-item index="/topicdetail">话题详情</el-menu-item>
        <el-menu-item index="4">
          <a href="http://localhost:8081/tucao/topic/detail/query" target="_blank">测试后台</a>
        </el-menu-item>
        <div class = "buttonStyle">
        <el-button>登录</el-button>
        <el-button>注册</el-button>
        </div>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <v-footer></v-footer>
  </el-container>
</template>

<script>
import footer from '@/components/footer.vue'
export default {
  components: {
    'v-footer': footer
  },
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
  background-color: rgb(246, 246, 246);
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
.el-main {
  background-color: #f6f6f6;
  color: rgb(15, 17, 17);
  text-align: center;
  line-height: 50px;
  padding-top: 0px;
  width: 100%;
}
.el-footer {
  background-color: #ffffff;
  color: #111;
  text-align: center;
  line-height: 60px;
}
.buttonStyle{
   text-align: right;
}
</style>

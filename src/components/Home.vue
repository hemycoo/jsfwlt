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
        <div class = "singUpAndRegister">
        <ul v-if="!showButton">
        <el-button type="primary" @click="handleClickForLogin">登录</el-button>
        <v-login v-if="modelShowForLogin" :visible.sync="modelShowForLogin"></v-login>
        <el-button type="primary" @click="handleClickForRegister">注册</el-button>
        <v-register v-on:getUserNickname="get" v-if="modelShowForRegister" :visible.sync="modelShowForRegister"></v-register>
        </ul>
        <span>{{userNickname}}</span>
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
import login from '@/components/login.vue'
import register from '@/components/register.vue'
export default {
  components: {
    'v-footer': footer,
    'v-login': login,
    'v-register': register
  },
  data () {
    return {
      activeIndex: '1',
      modelShowForLogin: false,
      modelShowForRegister: false,
      userNickname: '',
      showButton: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, 'path' + keyPath)
    },
    handleClickForLogin () {
      this.modelShowForLogin = true
    },
    handleClickForRegister () {
      this.modelShowForRegister = true
    },
    get (msg) {
      this.userNickname = msg
      this.showButton = true
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
.singUpAndRegister{
   text-align: right;
}
</style>

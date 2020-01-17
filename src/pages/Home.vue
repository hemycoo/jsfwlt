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
        <el-menu-item index="/roast">吐槽</el-menu-item>
        <el-menu-item index="/topicAnswer">话题详情</el-menu-item>
        <el-menu-item index="4">
          <a href="http://localhost:8081/tucao/topic/detail/query" target="_blank">测试后台</a>
        </el-menu-item>
        <div class = "singUpAndRegister" v-show="!isLogin">
        <el-button type="primary" @click="handleClickForLogin">登录</el-button>
        <v-login v-on:getLoginUserNickname="getLoginUserNickname" v-if="modelShowForLogin" :visible.sync="modelShowForLogin"></v-login>
        <el-button type="primary" @click="handleClickForRegister">注册</el-button>
        <v-register v-on:getRegisterUserNickname="getRegisterUserNickname" v-if="modelShowForRegister" :visible.sync="modelShowForRegister"></v-register>
        </div>
        <div class = "userHome" v-show="isLogin">
        <el-image class = "head_img" :src="headPhotoUrl"></el-image>
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
import footer from '@/pages/Footer.vue'
import login from '@/pages/user/Login.vue'
import register from '@/pages/user/Register.vue'
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
      userNickname: sessionStorage.getItem('userName'),
      showButton: false,
      headPhotoUrl: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'
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
    getRegisterUserNickname (msg) {
      this.userNickname = msg
      this.showButton = true
    },
    getLoginUserNickname (msg) {
      this.userNickname = msg
      this.showButton = true
    }
  },
  computed: {
    isLogin () {
      if (sessionStorage.getItem('userName') && sessionStorage.getItem('userToken')) {
        this.$store.commit('userStatus', sessionStorage.getItem('userName'))
      } else {
        this.$store.commit('userStatus', null)
      }
      return this.$store.getters.isLogin
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
.head_img{
    height: 40px;
    width: 40px;
    border-radius: 25px;

}
.showOfButton{
   text-align: right;
}
</style>

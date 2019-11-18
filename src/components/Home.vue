<template>
  <el-container>
    <el-header>
      <div>
        <nav v-bind:class="active" v-on:click.prevent>
          <a href="#" class="headerProjectName" v-on:click="makeActive('home')">论坛</a>
          <a href="#" class="headerFirstPage" v-on:click="makeActive('firstPage')">首页</a>
          <a href="#" class="headerTuCao" v-on:click="makeActive('tuCao')">吐槽</a>
          <a href="#" class="headerLogIn" v-on:click="makeActive('logIn')">登录</a>
          <a href="#" class="headerLogOut" v-on:click="makeActive('logOut')">退出</a>
        </nav>
      </div>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {}
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

a,
a:visited {
  outline: none;
  color: #389dc1;
}

a:hover {
  text-decoration: none;
}

section,
footer,
header,
aside,
nav {
  display: block;
}

nav {
  display: inline-block;
  /* margin: 60px auto 45px; */
  background-color: #ffffff;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #000 !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

nav.headerProjectName .headerProjectName,
nav.headerFirstPage .headerFirstPage,
nav.headerTuCao .headerTuCao {
  background-color: #e35885;
}

.headerLogIn {
  color: #e75530;
  font-size: 12px;
  display: block;
  height: 16px;
  float: right;
  margin-top: 0;
  padding-right: 20px;
  position: absolute;
  right: 60px;
  top: 0;
}
.headerLogOut {
  color: #e75530;
  font-size: 12px;
  display: block;
  height: 16px;
  float: right;
  margin-top: 0;
  position: absolute;
  right: 0;
  top: 0;
}

p {
  font-size: 22px;
  font-weight: bold;
  color: #7d9098;
}

p b {
  color: #ffffff;
  display: inline-block;
  padding: 5px 10px;
  background-color: #c4d7e0;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 18px;
}
</style>

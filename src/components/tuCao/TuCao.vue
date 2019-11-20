<template>
  <el-tabs v-model="activeName" type="card" stretch="true" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">全部</el-tab-pane>
    <el-tab-pane label="精华" name="second">精华</el-tab-pane>
    <el-tab-pane label="闲聊" name="third">闲聊</el-tab-pane>
    <el-tab-pane label="其他" name="fourth">其他</el-tab-pane>
    <div class="info-list">
      <div class="info_1">
        <div class="info_title">第一条吐槽</div>
        <div class="info_detail">
          <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
          <div class="img"><img src="@/images/logo.png"/></div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="info_2">
        <div class="info_title">第二条吐槽</div>
        <div class="info_detail">
          <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
          <div class="img"><img src="@/images/1.png"/></div>
        </div>
      </div>
      <el-divider></el-divider>
       <div class="info_3">
        <div class="info_title">第三条吐槽</div>
        <div class="info_detail">
          <span>这是一个论坛网站哦</span>
          <div class="img"><img src="@/images/2.png"/></div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="info_4">
        <div class="info_title">第四条吐槽</div>
        <div class="info_detail">
          <span>只要有树叶飞舞的地方就会有火在燃烧，那火光会照耀着村子，然后新的树叶会在此萌芽</span>
          <div class="img"><img src="@/images/3.png"/></div>
        </div>
      </div>
    </div>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
      // imgSrc: require("../images/logo.png"),
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

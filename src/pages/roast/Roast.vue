<template>
  <el-tabs v-model="activeName" type="card" :stretch="true">
    <ul class="infinite-list" infinite-scroll="load" style="overflow:auto">
    <div v-for="data in tucaoTopicList" :key=data.topicId class="infinite-list-item">
      <el-card class="box-card">
      <router-link :to="{name:'TopicAnswer', params: {'topicId':data.topicId}}"><div class="topicTitle">{{data.title}}</div></router-link>
      <div class = "contentAndImage" style="width: 1200px; height: 150px;">
        <div style="width: 400px; height: 150px;" class = "content">{{data.content}}</div>
        <div class="demo-image" style="width: 200px; height: 150px;">
        <el-image :src="data.imageUrl"></el-image>
        </div>
      </div>
      <div>
        <div class="like">
          <span>赞&nbsp;{{data.likeNumber}}&nbsp;&nbsp;</span>
          <span>踩&nbsp;{{data.dislikeNumber}}&nbsp;&nbsp;</span>
          <span>评论&nbsp;{{data.commentNumber}}&nbsp;&nbsp;</span>
          </div>
          <div class="showTime">
          <span>最新更新时间&nbsp;{{data.showTime}}</span>
          </div>
          </div>
      </el-card>
      </div>
  </ul>
  </el-tabs>
</template>
<style scoped>
.infinite-list{
  padding-top:0%;
  padding-left:20%;
  padding-right:20%;
  padding-bottom:0%;
}
.contentAndImage{
  position:relative
}
.content{
  text-align:left;
  font-size:5px;
  line-height:2;
  position:absolute;
  left:0%
}
.demo-image{
  position:absolute;
  left:45%
}
.like {
  text-indent: 5px;
  float:left
}
.showTime{
  float:right;
  width:auto;
  height:auto;
}
</style>
<script>
export default {
  data () {
    return {
      currentPage: 1, // 初始页
      pagesize: 10, //    每页的数据
      tucaoTopicList: [],
      activeName: '',
      flowers: []
    }
  },
  created () {
    this.handleTucaoTopicList()
  },
  methods: {
  // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    handleTucaoTopicList () {
      this.$http.get('http://localhost:8081/roast/topic/queryAll').then(res => { // 这是从本地请求的数据接口，
        this.tucaoTopicList = res.data.data
      })
    },
    load () {
      this.tucaoTopicList += 2
    }
  }
}
</script>

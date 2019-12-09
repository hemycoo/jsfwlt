<template>
  <el-tabs v-model="activeName" type="card" :stretch="true">
    <el-tab-pane label="全部" name="first">全部</el-tab-pane>
    <el-tab-pane label="精华" name="second">精华</el-tab-pane>
    <el-tab-pane label="闲聊" name="third">闲聊</el-tab-pane>
    <el-tab-pane label="其他" name="fourth">其他</el-tab-pane>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <div v-for="data in tucaoTopicList" :key=data.topicId class="infinite-list-item">
      <el-card class="box-card">
      <router-link :to="{name:'TopicDetail', params: {'topicId':data.topicId}}"><div class="topicTitle">{{data.title}}</div></router-link>
      <div>{{data.content}}</div>
      <div class="demo-image">
    <el-image
      style="width: 200px; height: 200px"
      :src="data.imageUrl"
      :fit="cover"></el-image>
</div>
        <p class="like">
          <span>赞&nbsp;{{data.likeNumber}}&nbsp;&nbsp;</span>
          <span>踩&nbsp;{{data.dislikeNumber}}&nbsp;&nbsp;</span>
          <span>评论&nbsp;{{data.commentNumber}}</span>
        </p>
      </el-card>
      </div>
  </ul>
      <!--<el-pagination
        @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 40]"
                            :page-size="pagesize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="tucaoTopicList.length">
      ></el-pagination>-->
  </el-tabs>
</template>
<style scoped>
.infinite-list{
  padding-top:0%;
  padding-left:20%;
  padding-right:20%;
  padding-bottom:0%
}
.like {
  text-align: right;
  text-indent: 5px;
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
      this.$http.get('http://localhost:8081/tucao/topic/queryAll').then(res => { // 这是从本地请求的数据接口，
        this.tucaoTopicList = res.data.data
      })
    },
    load () {
      this.tucaoTopicList += 2
    }
  }
}
</script>

<template>
  <el-tabs v-model="activeName" type="card" :stretch="true" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">全部</el-tab-pane>
    <el-tab-pane label="精华" name="second">精华</el-tab-pane>
    <el-tab-pane label="闲聊" name="third">闲聊</el-tab-pane>
    <el-tab-pane label="其他" name="fourth">其他</el-tab-pane>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <div v-for="data in tucaoTopicList" :key=data.topicId class="infinite-list-item">
      <el-card class="box-card">
      <router-link :to="{name:'TopicDetail', params: {'topicId':data.topicId}}"><div class="topicTitle">{{data.title}}</div></router-link>
      <div>{{data.content}}</div>
      <div class="rightullidiv">
        <img src="@/images/1.png" class="rightulliimg" alt=""/>
        </div>
        <div>评论数:{{data.commentNumber}}</div>
        <div>点赞数量:{{data.likeNumber}}</div>
        <div>点踩数量:{{data.dislikeNumber}}</div>
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
.rightullidiv{
   width: 100%;
     height: 50%;
     background: #ffffff;
     display: flex;
     justify-content: center;
     align-items: center;
}
 .rightulliimg {
            max-width: 50%;
            max-height: 200px;
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
    handleClick () {}
  },
  load () {
    this.tucaoTopicList += 2
  }
}
</script>

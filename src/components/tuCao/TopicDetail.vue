<template>
<div>
  <div class="header">
    <p style="padding-right:85%">
      {{topic.title}}
    </p>
    <p style="padding-right:85%">
      {{topic.content}}
    </p>
  </div>
    <ul class="infinite-list" v-infinite-scroll="load">
      <div v-for="data in topicdetailList" :key="data" class="infinite-list-item">
        <p class="yonghu"><span>用户头像</span><span>{{data.userNickname}}</span></p>
        {{ data.content }}
        <p class="MfTime">编辑于&nbsp;{{data.modificationTime}}</p>
        <p class="like">
          <span>赞&nbsp;{{data.likeNumber}}&nbsp;&nbsp;</span>
          <span>踩&nbsp;{{data.dislikeNumber}}&nbsp;&nbsp;</span>
          <span>评论&nbsp;{{data.commentId}}</span>
        </p>
      </div>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      topicdetailList: [],
      topic: [],
      count: 0,
      i: 0,
      topicId: ''
    }
  },
  created () {
    this.topicId = this.$route.params.topicId
    this.getTopicDetailList()
    this.getTopic()
  },
  methods: {
    async getTopicDetailList () {
      this.$http.get('tucao/topic/detail/query/' + this.topicId).then(Response => {
        this.topicdetailList = Response.data.topicDetaildata
        console.log(Response.data.topicDetaildata)
      })
    },
    async getTopic () {
      this.$http.get('tucao/topic/query/' + this.topicId).then(Res => {
        this.topic = Res.data.data
        console.log(this.topic)
      })
    },
    load () {
      this.topicdetailList += 2
    }
  }
}
</script>
<style scoped>
.infinite-list {
  background-color: azure;
  padding-left: 5%;
  padding-right: 30%;
}
.infinite-list-item {
  background-color:#ffffff;
  border: 5px solid #f6f6f6;
}
.infinite-list {
  padding-top: 0.5px;
  background-color: #f6f6f6
}
.header {
  width: 101%;
  background-color: #ffffff;
  padding-top: 1px;
}
.yonghu {
  text-align: left;
  text-indent: 5px;
}
.MfTime {
  text-align: left;
}
.like {
  text-align: left;
  text-indent: 5px;
}
</style>

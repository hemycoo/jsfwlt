<template>
<div>
  <div class="header">
    <p style="padding-right:85%">
      {{topic.title}}
    </p>
    <p style="padding-right:85%">
      {{topic.contentAbstract}}
    </p>
    <p class="answerInputDiv">
      <answer-input></answer-input>
    </p>
    <p>测试</p>
  </div>
    <ul class="infinite-list" infinite-scroll="load">
      <div v-for="data in topicdetailList" :key="data" class="infinite-list-item">
        <p class="yonghu"><span>用户头像</span><span>{{data.userNickname}}</span></p>
        {{ data.content }}
        <p class="MfTime">编辑于&nbsp;{{data.modifyTime}}</p>
        <p class="like">
          <span>赞&nbsp;{{data.likeNumber}}&nbsp;&nbsp;</span>
          <span>踩&nbsp;{{data.dislikeNumber}}&nbsp;&nbsp;</span>
          <el-button type="text" @click="showCommentClick(data.topicAnswerId)">评论</el-button>
        </p>
          <div class="comment-list" v-show="commentShowBoolean">
                <h5 align = "left">用户评论</h5>
                  <div class="comment-item">
                      <TopicComment :comments="comment"></TopicComment>
                  </div>
          </div>
      </div>
    </ul>
</div>
</template>

<script>
import TopicComment from '../roast/TopicCommentAndReply.vue'
import AnswerInput from '../roast/AnswerInput.vue'
export default {
  components: {
    TopicComment,
    AnswerInput
  },
  data () {
    return {
      topicdetailList: [],
      topic: [],
      count: 0,
      i: 0,
      topicId: '',
      comment: [],
      commentShowBoolean: false,
      detailExist: ''
    }
  },
  created () {
    this.topicId = this.$route.params.topicId
    this.getTopicDetailList()
    this.getTopic()
  },
  methods: {
    async getTopicDetailList () {
      this.$http.get('roast/topic/answer/query/' + this.topicId).then(Response => {
        this.topicdetailList = Response.data.topicAnswerData
        console.log(Response.data.topicAnswerData)
      })
    },
    async getTopic () {
      this.$http.get('roast/topic/query/' + this.topicId).then(Res => {
        this.topic = Res.data.data
        console.log(this.topic)
      })
    },
    load () {
      this.topicdetailList += 2
    },
    showCommentClick: function (topicAnswerId) {
      this.commentShowBoolean = !this.commentShowBoolean
      console.log(topicAnswerId)
      this.$http.get('roast/topic/answer/querycomment/' + topicAnswerId).then(Res1 => {
        this.comment = Res1.data.commentReplyData
        // console.log('comment  ' + this.comment[0].commentId)
      })
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

<template>
  <div>
    <div v-for="(com,i) in comments" :key="i" class="author-title reply-father">
      <div class="author-info">
        <span class="author-name">{{com.userNickname}}</span>
        <span class="author-time">{{com.commentTime}}</span>
      </div>
      <div class="icon-btn">
        <i class="iconfont el-icon-caret-top"></i>
        {{com.likeNumber}}
      </div>
      <div class="talk-box">
        <p>
          <span class="reply">{{com.commentContent}}</span>
        </p>
      </div>
      <div class="reply-box">
        <div v-for="(reply,j) in com.replyList" :key="j" class="author-title">
          <el-avatar class="header-img" :size="40" :src="reply.fromHeadImg"></el-avatar>
          <div class="author-info">
            <span class="author-name">{{reply.userNickname}}</span>
            <span class="author-time">{{reply.replyTime}}</span>
          </div>
          <div class="icon-btn">
            <span>
              <i class="iconfont el-icon-s-comment"></i>
            </span>
            <i class="iconfont el-icon-caret-top"></i>
            {{reply.likeNumber}}
          </div>
          <div class="talk-box">
            <p>
              <span>回复 {{reply.replyToName}}:</span>
              <span class="reply">{{reply.replyContent}}</span>
            </p>
          </div>
          <div class="reply-box"></div>
        </div>
      </div>
    </div>
    <span>
      <el-input placeholder="写下你的评论" v-model="input" clearable></el-input>
    </span>
    <span>
      <el-button type="primary" @click="commentCommentclick">评论</el-button>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    comments: { type: Array, required: false, default: null }
  },
  data () {
    return {
      input: '',
      receiveComments: [],
      topicAnswerId: ''
    }
  },
  created () {},
  watch: {
    comments: function (newVal, oldVal) {
      this.receiveComments = newVal
      this.topicAnswerId = newVal[0].topicAnswerId
      console.log('watch125', this.topicAnswerId)
    }
  },
  methods: {
    commentCommentclick: function () {
      console.log(this.comments, '7777')
      this.topicAnswerId = this.comments[0].topicAnswerId
      alert('id ' + this.topicAnswerId)
      let CommentInsertReq = {
        topicAnswerId: this.topicAnswerId,
        commentContent: this.input
      }
      this.$http
        .post('/roast/topic/answer/insertcomment', CommentInsertReq)
        .then(res => {
          console.log('res=>  ', res.data)
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.author-title {
  padding: 10px;

  .header-img {
    display: inline-block;
    vertical-align: top;
  }

  .author-info {
    display: inline-block;
    // margin-left 2px
    align-content: left;
    width: 60%;
    height: 40px;
    line-height: 20px;

    >span {
      display: block;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .author-name {
      color: #000;
      font-size: 18px;
      font-weight: bold;
    }

    .author-time {
      font-size: 14px;
    }
  }

  .icon-btn {
    width: 30%;
    padding: 0 !important;
    float: right;

    @media screen and (max-width: 1200px) {
      width: 20%;
      padding: 7px;
    }

    >span {
      cursor: pointer;
    }

    .iconfont {
      margin: 0 5px;
    }
  }

  .talk-box {
    margin: 0 50px;

    >p {
      margin: 0;
    }

    .reply {
      font-size: 16px;
      color: #000;
    }
  }

  .reply-box {
    margin: 10px 0 0 50px;
    background-color: #efefef;
  }
}
</style>

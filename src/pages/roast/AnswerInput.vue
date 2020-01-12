<template>
  <div>
    <el-input type="textarea" placeholder="请输入回答" v-model="textarea" maxlength="1500" show-word-limit></el-input>
    <el-button type="primary" @click="commitAnswerClick">提交回答</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textarea: '',
      topicId: ''
    }
  },
  created () {
    this.topicId = this.$route.params.topicId
  },
  methods: {
    commitAnswerClick: function () {
      alert(this.topicId)
      let AnswerInsertReq = { 'topicId': this.topicId, 'content': this.textarea }
      this.$http.post('/roast/topic/answer/insertcomment', AnswerInsertReq).then(res => {
        console.log('res=>  ', res.data)
      })
    }
  }
}
</script>

<style>
</style>

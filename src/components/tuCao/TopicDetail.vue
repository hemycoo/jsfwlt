<template>
  <div>话题详情
      <p>123</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    this.getTopicDetailList()
  },
  methods: {
    async getTopicDetailList () {
      this.$http
        .get('tucao/topic/detail/query')
        .then(Response => {
          console.log(Response.data.message)
        })
    }
  }
}
</script>
<style scoped>

</style>

<template>
  <el-dialog :visible.sync="visible" :show-close="false" width="600px" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false">
    <h2 class="title" slot="title">发布话题</h2>
    <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="cancelModal"><i class="el-dialog__close el-icon el-icon-close"></i></button>
    <el-form class="form-wrappe名r" ref="orderForm" :model="orderForm" :rules="addRules" label-width="110px">
      <el-form-item label="标题：" prop="title">
        <el-input v-model="orderForm.title" type="text" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="内容：" prop="content">
        <el-input v-model="orderForm.content" type="textarea" placeholder="请输入话题内容" :rows="4" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="buttons-wrap">
      <el-button type="primary" @click="push">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      orderForm: {},
      addRules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        content: [{ required: true, message: '请输入话题内容', trigger: 'blur' }]
      },
      returnMessage: ''
    }
  },
  methods: {
    initForm () {
      this.orderForm = {
        title: '',
        content: ''
      }
      if (this.$refs.orderForm) {
        this.$refs.orderForm.resetFields()
      }
    },
    cancelModal () {
      // 关闭弹窗，触发父组件修改visible值
      this.$emit('update:visible', false)
    },
    push () {
      /* formData格式提交： */
      let formData = new FormData()
      for (var key in this.orderForm) {
        formData.append(key, this.orderForm[key])
      }
      axios({
        method: 'post',
        url: 'http://localhost:8081/roast/topic/addRoastTopic',
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
        data: formData
      }).then((res) => {
        if (res.data.status === '200') {
          // 如果返回200，说明后端注册用户成功，关闭弹出窗口
          this.$emit('update:visible', false)
        } else {
          this.$alert('发布错误', '错误提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${action}`
              })
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.title{
    text-align: center;
}
</style>

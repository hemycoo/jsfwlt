<template>
  <el-dialog :visible.sync="visible" :show-close="false" width="600px" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false">
    <h2 class="title" slot="title">用户注册</h2>
    <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="cancelModal"><i class="el-dialog__close el-icon el-icon-close"></i></button>
    <el-form class="form-wrapper" ref="orderForm" :model="orderForm" :rules="addRules" label-width="110px">
      <el-form-item label="用户名：" prop="userNickname">
        <el-input v-model="orderForm.userNickname" type="text" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="userPassword">
        <el-input v-model="orderForm.userPassword" type="text" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="confirmUserPassword">
          <el-input v-model="orderForm.confirmUserPassword" type="text" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item label="电话：" prop="userPhone">
          <el-input v-model="orderForm.userPhone" type="text" placeholder="电话"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="userEmail">
          <el-input v-model="orderForm.userEmail" type="text" placeholder="邮箱"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="buttons-wrap">
      <el-button type="primary" @click="register">确定</el-button>
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
        userNickname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        userPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmUserPassword: [{ required: true, message: '请确认密码', trigger: 'blur' }, {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.orderForm.userPassword) {
              callback(new Error('两次输入密码不一致'))
            } else {
              callback()
            }
          },
          trigger: 'blur' }]
      },
      returnMessage: ''
    }
  },
  methods: {
    initForm () {
      this.orderForm = {
        userNickname: '',
        userPassword: '',
        confirmUserPassword: '',
        userPhone: '',
        userEmail: ''
      }
      if (this.$refs.orderForm) {
        this.$refs.orderForm.resetFields()
      }
    },
    cancelModal () {
      // 关闭弹窗，触发父组件修改visible值
      this.$emit('update:visible', false)
    },
    register () {
      /* formData格式提交： */
      let formData = new FormData()
      for (var key in this.orderForm) {
        formData.append(key, this.orderForm[key])
      }
      axios({
        method: 'post',
        url: 'http://localhost:8081/register',
        headers: { 'Content-Type': 'multipart/form-data' },
        // contentType: 'application/json;charsetset=UTF-8',
        withCredentials: true,
        data: formData
      }).then((res) => {
        if (res.data.status === '200') {
          // 如果返回200，说明后端注册用户成功，关闭弹出窗口
          this.$emit('update:visible', false)
          this.$emit('getUserNickname', res.data.userNickname)
        } else {
          this.$alert('该用户名已存在', '错误提示', {
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

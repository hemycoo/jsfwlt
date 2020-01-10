<template>
  <el-dialog :visible.sync="visible" :show-close="false" width="600px" :modal="true" :close-on-click-modal="false" :close-on-press-escape="false">
    <h2 class="title" slot="title">用户登录</h2>
    <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="cancelModal"><i class="el-dialog__close el-icon el-icon-close"></i></button>
    <el-form class="form-wrapper" ref="orderForm" :model="orderForm" :rules="addRules" label-width="110px">
      <el-form-item label="用户名：" prop="userName">
        <el-input v-model="orderForm.userName" type="text" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="userPassword">
        <el-input v-model="orderForm.userPassword" type="text" placeholder="密码" show-password></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="buttons-wrap">
      <el-button type="primary" @click="login">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
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
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        userPassword: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    initForm () {
      this.orderForm = {
        userName: '',
        userPassword: ''
      }
      if (this.$refs.orderForm) {
        this.$refs.orderForm.resetFields()
      }
    },
    cancelModal () {
      // 关闭弹窗，触发父组件修改visible值
      this.$emit('update:visible', false)
    },
    login () {
      this.$http.get('http://localhost:8081/login', { params: { userName: this.orderForm.userName, userPassword: this.orderForm.userPassword } }).then(res => {
        if (res.data.status === '200') {
          // 如果返回200，说明用户登录成功，关闭弹出窗口
          this.$emit('update:visible', false)
          this.$emit('getLoginUserNickname', res.data.map)
        } else {
          this.$alert(res.data.map, '错误提示', {
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

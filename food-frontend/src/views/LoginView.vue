<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

const registerMode = ref(false)

const form = reactive({
  username: '',
  password: '',
  nickname: ''
})

function submit() {
  if (!form.username.trim()) {
    ElMessage.warning('请输入用户名')
    return
  }

  if (!form.password) {
    ElMessage.warning('请输入密码')
    return
  }

  if (registerMode.value && !form.nickname.trim()) {
    ElMessage.warning('请输入昵称')
    return
  }

  // 目前是模拟登录，连接后端后再替换
  userStore.saveLogin({
    token: 'test-token',
    username: form.username,
    nickname: form.nickname || form.username,
    role: form.username === 'admin' ? 'ADMIN' : 'USER'
  })

  ElMessage.success(registerMode.value ? '注册成功' : '登录成功')
  router.push('/home')
}
</script>

<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2>家庭食材管理</h2>

      <el-form label-width="70px">
        <el-form-item label="用户名">
          <el-input
              v-model="form.username"
              placeholder="请输入用户名"
          />
        </el-form-item>

        <el-form-item v-if="registerMode" label="昵称">
          <el-input
              v-model="form.nickname"
              placeholder="请输入昵称"
          />
        </el-form-item>

        <el-form-item label="密码">
          <el-input
              v-model="form.password"
              type="password"
              show-password
              placeholder="请输入密码"
              @keyup.enter="submit"
          />
        </el-form-item>

        <el-button
            type="primary"
            class="submit-button"
            @click="submit"
        >
          {{ registerMode ? '注册' : '登录' }}
        </el-button>

        <div class="switch-area">
          <el-button link type="primary" @click="registerMode = !registerMode">
            {{ registerMode ? '已有账号，返回登录' : '没有账号，立即注册' }}
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #dff4e5, #eef5f0);
}

.login-card {
  width: 420px;
  padding: 15px;
}

.login-card h2 {
  margin-bottom: 30px;
  text-align: center;
}

.submit-button {
  width: 100%;
}

.switch-area {
  margin-top: 12px;
  text-align: center;
}
</style>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

function logout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <el-container class="layout">
    <el-aside width="220px" class="sidebar">
      <div class="logo">家庭食材管理</div>

      <el-menu
          router
          background-color="#304156"
          text-color="#ffffff"
          active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">系统首页</el-menu-item>
        <el-menu-item index="/foods">食材管理</el-menu-item>
        <el-menu-item index="/recipes">菜谱推荐</el-menu-item>
        <el-menu-item index="/shopping">采购清单</el-menu-item>

        <el-menu-item
            v-if="userStore.isAdmin"
            index="/admin/users"
        >
          用户管理
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        <span>家庭食材保质期管理与菜谱推荐系统</span>

        <div>
          <span class="nickname">
            {{ userStore.nickname || userStore.username }}
          </span>

          <el-button type="danger" plain @click="logout">
            退出登录
          </el-button>
        </div>
      </el-header>

      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.sidebar {
  background-color: #304156;
}

.logo {
  padding: 22px 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #e4e7ed;
}

.nickname {
  margin-right: 15px;
}

.main {
  background-color: #f5f7fa;
}
</style>
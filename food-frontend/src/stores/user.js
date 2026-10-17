import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const token = ref(localStorage.getItem('token') || '')
    const username = ref(localStorage.getItem('username') || '')
    const nickname = ref(localStorage.getItem('nickname') || '')
    const role = ref(localStorage.getItem('role') || '')

    const isLogin = computed(() => Boolean(token.value))
    const isAdmin = computed(() => role.value === 'ADMIN')

    function saveLogin(data) {
        token.value = data.token
        username.value = data.username
        nickname.value = data.nickname
        role.value = data.role

        localStorage.setItem('token', data.token)
        localStorage.setItem('username', data.username)
        localStorage.setItem('nickname', data.nickname)
        localStorage.setItem('role', data.role)
    }

    function logout() {
        token.value = ''
        username.value = ''
        nickname.value = ''
        role.value = ''

        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('nickname')
        localStorage.removeItem('role')
    }

    return {
        token,
        username,
        nickname,
        role,
        isLogin,
        isAdmin,
        saveLogin,
        logout
    }
})